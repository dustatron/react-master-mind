import React from "react";
import Pegs from "./PegsTemplate";

function Clues() {
  return (
    <div className="row">
      <div className="ui segment">
        <Pegs />
      </div>
      <div className="ui segment">
        <Pegs />
      </div>
      <div className="ui segment">
        <Pegs />
      </div>
    </div>
  );
}
export default Clues;
