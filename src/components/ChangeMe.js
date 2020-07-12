import React, { useState } from "react";

import "./ChangeMe.css";

function ChangeMe() {
  let [state, SetState] = useState("red");
  return (
    <div>
      <h1 className={`font ${state}`}>Change Me</h1>
      <button
        onClick={() => {
          state === "red" ? SetState("blue") : SetState("red");
        }}
      >
        ChangeMe
      </button>
    </div>
  );
}
export default ChangeMe;
