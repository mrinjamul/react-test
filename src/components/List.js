import React from "react";

function List(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.tel}</h1>
    </div>
  );
}

export default List;
