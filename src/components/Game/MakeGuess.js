import React from "react";
import "./game.css";
import { v4 } from "uuid";
// import PropTypes from "prop-types";

function MakeGuess(props) {
  function handleNewGuessFormSubmission(event) {
    event.preventDefault();
    props.onNewGuessOnClick({
      colorOne: event.target.one.value,
      colorTwo: event.target.two.value,
      colorThree: event.target.three.value,
      colorFour: event.target.four.value,
      guessId: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewGuessFormSubmission}>
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
              <div className="fluid ui vertical buttons">
                <button type="submit" className="ui secondary button">
                  Submit Guess
                </button>
              </div>
            </div>
            <div className="three wide column">
              <select className="color-one" id="Color-two" name="one">
                <option disabled selected>
                  Select color 1
                </option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
                <option value="White">White</option>
                <option value="Black">Black</option>
              </select>
            </div>
            <div className="three wide column">
              <select className="color-one" id="Color-one" name="two">
                <option disabled selected>
                  Select color 2
                </option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
                <option value="White">White</option>
                <option value="Black">Black</option>
              </select>
            </div>
            <div className="three wide column">
              <select className="color-one" id="Color-one" name="three">
                <option disabled selected>
                  Select color 3
                </option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
                <option value="White">White</option>
                <option value="Black">Black</option>
              </select>
            </div>
            <div className="three wide column">
              <select className="color-four" id="Color-one" name="four">
                <option disabled selected>
                  Select color 4
                </option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
                <option value="White">White</option>
                <option value="Black">Black</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
export default MakeGuess;
