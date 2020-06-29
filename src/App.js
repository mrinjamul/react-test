import React, { Component } from "react";
import axios from "axios";
import User from "./components/User";

import "./App.css";
import "./styles/Main.sass";
import ProgressBar from "./components/ProgressBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      percent: 0.4,
      count: 0,
      name: "",
      persons: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  updateProgress = (field, val) => {
    this.setState({ [field]: val });
  };

  handleClick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  handleReset() {
    this.setState({ count: 0 });
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
      console.log(persons);
    });
  }
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
    };

    axios.post(`http://localhost:8080/users`, { user }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <div>
        <div className="div">
          <ProgressBar width={400} percent={this.state.percent} />
          <button
            onClick={() =>
              this.updateProgress("percent", this.state.percent + 0.1)
            }
          >
            Add 10%
          </button>
        </div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
        <br />
        <button onClick={this.handleReset}>Reset</button>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
        <div>
          <ul>
            {this.state.persons.map((person) => (
              <User
                key={person.id}
                id={person.id}
                name={person.name}
                username={person.username}
                email={person.email}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
