import React, { Component } from "react";
import axios from "axios";
import User from "./components/User";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "",
      persons: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

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
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
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

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
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
