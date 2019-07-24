import React, {Component} from "react";

// function List(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.tel}</h1>
//     </div>
//   );
// }
class List extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.tel}</h1>
      </div>
    )
  }
}

export default List;
