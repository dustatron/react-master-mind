import React from "react";
import Pegs from "./PegsTemplate";
import GuessTemplate from "./GuessTemplate";

function Turn(props) {
  return (
    <div className="row">
      <div className="four wide column">
        <div className="ui segment">
          {/* <Pegs pegOne={props.clueOne} pegTwo={props.clueTwo} pegThree={props.clueThree} pegFour={props.clueFour} /> */}
          <Pegs />
        </div>
      </div>
      <div className="twelve wide column">
        <div className="ui segment">
          <GuessTemplate
            // turn={props.turnNumber}
            colorOne={props.colorOne}
            colorTwo={props.colorTwo}
            colorThree={props.colorThree}
            colorFour={props.colorFour}
          />
        </div>
      </div>
    </div>
  );
}
export default Turn;
