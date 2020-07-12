import React, { useState } from "react";

import "./ChangeMe.css";

function ChangeMe() {
  let [state, SetState] = useState("red");
  const handleClick = () => {
    // if (state === "red") {
    //   SetState("blue");
    // }
    // if (state === "blue") {
    //   SetState("red");
    // }
    state === "red" ? SetState("blue") : SetState("red");
  };
  return (
    <div>
      <h1 className={`font ${state}`}>Change Me</h1>
      <button onClick={handleClick}>ChangeMe</button>
    </div>
  );
}
export default ChangeMe;
