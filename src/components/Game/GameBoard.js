import React from "react";
// import ReactDom from "react-dom";
import Clues from "./Clues";
import MakeGuess from "./MakeGuess";
import MasterMindRow from "./MasterMindRow";
import GuessTemplate from "./GuessTemplate";

class GameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      masterSequence: this.handleMasterSequence(),
      userGuess: [],
      clues: []
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
        <h1>GameBoard</h1>
        <MasterMindRow sequence={this.state.masterSequence} />
        <Clues />
        <MakeGuess />
        <GuessTemplate />
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
