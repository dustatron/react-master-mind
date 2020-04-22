import React from "react";
import "./game.css";
function MakeGuess(props) {
  return (
    <div className="ui grid">
      <div className="row">
        <div className="three wide column">
          <div className="colored-pin" />
        </div>
        <div className="three wide column">
          <div className="colored-pin pin-grey" />
        </div>
        <div className="three wide column">
          <div className="colored-pin pin-grey" />
        </div>
        <div className="three wide column">
          <div className="colored-pin pin-grey" />
        </div>
        <div className="three wide column">
          <div className="colored-pin pin-grey" />
        </div>
      </div>
      <div className="row">
        <div className="four wide column">
          <div class="fluid ui vertical buttons">
            <button class="ui secondary button">Okay</button>
          </div>
        </div>
        <div className="three wide column">
          <select className="color-one" id="Color-one" name="Color-One" onChange={props.weekdayChange}>
            <option value="" disabled selected>
              Select color 1
            </option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
            <option value="Orange">Orange</option>
            <option value="Black">Black</option>
            border-radius: 50%;
          </select>
        </div>
        <div className="three wide column">
          <select className="color-one" id="Color-one" name="Color-One" onChange={props.weekdayChange}>
            <option value="" disabled selected>
              Select color 2
            </option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
            <option value="Orange">Orange</option>
            <option value="Black">Black</option>
          </select>
        </div>
        <div className="three wide column">
          <select className="color-one" id="Color-one" name="Color-One" onChange={props.weekdayChange}>
            <option value="" disabled selected>
              Select color 3
            </option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
            <option value="Orange">Orange</option>
            <option value="Black">Black</option>
          </select>
        </div>
        <div className="three wide column">
          <select className="color-four" id="Color-one" name="Color-One" onChange={props.weekdayChange}>
            <option value="" disabled selected>
              Select color 4
            </option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
            <option value="Orange">Orange</option>
            <option value="Black">Black</option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default MakeGuess;
