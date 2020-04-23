import React from "react";
import MasterMindRow from "../Game/MasterMindRow";
import "./layout.css";

function Modal(props) {
  return (
    <div className="">
      <div className="ui modal">
        <i className="close icon" />
        <div className="header">GAME OVER!!!</div>
        <div className="image content">
          <div className="ui medium image">
            <img src={props.img} alt="reward" />
          </div>
          <div className="description">
            <div className="ui header">{props.message}</div>
            <p>Its a kids game, how did you lose?</p>
            <p>Would you like to play again?</p>
          </div>
          <MasterMindRow sequence={props.masterSequence} />
        </div>
        <div className="actions">
          <div className="ui black deny button">Nope</div>
          <div className="ui positive right labeled icon button">
            Yep, that's me
            <i className="checkmark icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
