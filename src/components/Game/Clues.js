import React from "react";
import Pegs from "./PegsTemplate";

function Clues() {
  return (
    <div className="row">
      <div class="ui segment">
        <Pegs />
      </div>
      <div class="ui segment">
        <Pegs />
      </div>
      <div class="ui segment">
        <Pegs />
      </div>
    </div>
  );
}
export default Clues;
