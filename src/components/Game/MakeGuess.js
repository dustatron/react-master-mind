import React from "react";
import "./game.css";
import { v4 } from "uuid";
// import PropTypes from "prop-types";

class MakeGuess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorOne: "grey",
      colorTwo: "grey",
      colorThree: "grey",
      colorFour: "grey"
    };

    this.onNewGuessOnClick = props.onNewGuessOnClick;
  }

  handleNewGuessFormSubmission = (event) => {
    event.preventDefault();
    this.onNewGuessOnClick({
      colorOne: event.target.colorOne.value,
      colorTwo: event.target.colorTwo.value,
      colorThree: event.target.colorThree.value,
      colorFour: event.target.colorFour.value,
      guessId: v4()
    });
  };

  colorChangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "colorOne") {
      this.setState({
        colorOne: value
      });
    }
    if (name === "colorTwo") {
      this.setState({
        colorTwo: value
      });
    }
    if (name === "colorThree") {
      this.setState({
        colorThree: value
      });
    }
    if (name === "colorFour") {
      this.setState({
        colorFour: value
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleNewGuessFormSubmission}>
          <div className="ui grid">
            <div className="row">
              <div className="three wide column">
                <div className="colored-pin" />
              </div>
              <div className="three wide column">
                <div className={"colored-pin pin-" + this.state.colorOne} />
              </div>
              <div className="three wide column">
                <div className={"colored-pin pin-" + this.state.colorTwo} />
              </div>
              <div className="three wide column">
                <div className={"colored-pin pin-" + this.state.colorThree} />
              </div>
              <div className="three wide column">
                <div className={"colored-pin pin-" + this.state.colorFour} />
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
                <select className="ui dropdown" id="Color-two" name="colorOne" onChange={this.colorChangehandler}>
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
                <select className="ui dropdown" id="Color-one" name="colorTwo" onChange={this.colorChangehandler}>
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
                <select className="ui dropdown" id="Color-one" name="colorThree" onChange={this.colorChangehandler}>
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
                <select className="ui dropdown" id="Color-one" name="colorFour" onChange={this.colorChangehandler}>
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
}
export default MakeGuess;

// this is how we handled the dropdown on change. I'm not sure if this will work to change the color preview

// colorChangehandler = (event) => {
// this.setState({
//   color: event.target.value
// });
// }

// render() {
//   return (
//     <React.Fragment>
//       <MakeGuess colorChange={this.colorChangehandler}/>
//       <Header />
//       <br />
//       <Results color={this.state.color}/>
//     </React.Fragment>
//   )
// }
