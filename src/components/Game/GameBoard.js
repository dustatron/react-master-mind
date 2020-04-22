import React from "react";
// import ReactDom from "react-dom";
import Clues from "./Clues";
import MakeGuess from "./MakeGuess";
import MasterMindRow from "./MasterMindRow";
import GuessTemplate from "./GuessTemplate";
import Pegs from "./PegsTemplate";

class GameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      masterSequence: this.handleMasterSequence(),
      turn: [ { guess: [], clue: [] } ]
    };

    // this.handleMasterSequence();
  }

  handleMasterSequence = () => {
    // const newMasterSequence = this.state.masterSequence.concat(color);
    const newMasterSequence = [ 1, 1, 1, 1 ].map((color) => {
      return Math.floor(Math.random() * 7);
    });
    return newMasterSequence;
  };

  render() {
    return (
      <div>
        <div className="ui grid">
          <div class="row">
            <div class="sixteen wide column">
              <div class="ui segment">
                <MasterMindRow sequence={this.state.masterSequence} />
              </div>
            </div>
          </div>

          <div className="row">
            <div class="four wide column">
              <div class="ui segment">
                <Pegs pegOne="pin-black" pegTwo="pin-black" pegThree="pin-black" pegFour="pin-black" />
              </div>
            </div>
            <div class="twelve wide column">
              <div class="ui segment">
                <GuessTemplate turn="3" />
              </div>
            </div>
          </div>
          <div className="row">
            <div class="four wide column">
              <div class="ui segment">
                <Pegs pegOne="pin-white" pegTwo="pin-white" pegThree="pin-black" pegFour="pin-black" />
              </div>
            </div>
            <div class="twelve wide column">
              <div class="ui segment">
                <GuessTemplate turn="3" />
              </div>
            </div>
          </div>
          <div className="row">
            <div class="four wide column">
              <div class="ui segment">
                <Pegs pegOne="pin-black" pegTwo="pin-black" pegThree="pin-black" pegFour="pin-white" />
              </div>
            </div>
            <div class="twelve wide column">
              <div class="ui segment">
                <GuessTemplate turn="3" />
              </div>
            </div>
          </div>

          {/* <div class="twelve wide column">
              <div class="ui segment">
              </div>
              <div class="ui segment">
                <GuessTemplate turn="2" />
              </div>
              <div class="ui segment">
                <GuessTemplate turn="1" />
              </div>
            </div>
          </div> */}

          <div className="row">
            <div class="sixteen wide column">
              <div class="ui segment">
                <MakeGuess />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameBoard;

/*
1 red,
2 green,
3 blue,
4 yellow,
5 white,
6 black
*/
