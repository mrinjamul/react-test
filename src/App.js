import React, {Component} from "react"
import List from "./components/List"
import Data from "./components/listData"

// function App() {
//   const data = Data.map(data => <List key={data.id} name={data.name} tel={data.tel} />)
//     return (
//         <div>
//           {data}
//         </div>
//     )
// }
class App extends Component {
  render() {
    const data = Data.map(data => <List key={data.id} name={data.name} tel={data.tel} />)
    return(
      <div>
        {data}
      </div>
    )
  }
}

export default App
