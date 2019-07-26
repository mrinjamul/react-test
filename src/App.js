import React, {Component} from "react"

import "./App.css"

class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleReset() {
      this.setState({ count: 0 })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

export default App
