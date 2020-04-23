import React from "react";
function GuessTemplate(props) {
  return (
    <div className="ui grid guess">
      <div className="row">
        <div className="three wide column">
          <div className={"colored-pin pin-" + props.colorOne} />
        </div>
        <div className="three wide column">
          <div className={"colored-pin pin-" + props.colorTwo} />
        </div>
        <div className="three wide column">
          <div className={"colored-pin pin-" + props.colorThree} />
        </div>
        <div className="three wide column">
          <div className={"colored-pin pin-" + props.colorFour} />
        </div>
        <div className="three wide column">
          <h5> Turn Number {props.turnNumber} </h5>
        </div>
      </div>
    </div>
  );
}
export default GuessTemplate;
