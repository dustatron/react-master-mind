import React from "react";
function GuessTemplate(props) {
  return (
    <div className="ui grid guess">
      <div className="row">
        <div className="three wide column">
          <div className="colored-pin pin-green" />
        </div>
        <div className="three wide column">
          <div className="colored-pin pin-red" />
        </div>
        <div className="three wide column">
          <div className="colored-pin pin-yellow" />
        </div>
        <div className="three wide column">
          <div className="colored-pin pin-blue" />
        </div>
        <div className="three wide column">
          <h5> Turn Number {props.turn} </h5>
        </div>
      </div>
    </div>
  );
}
export default GuessTemplate;
