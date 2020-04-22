import React from "react";
// import ReactDom from "react-dom";
import MakeGuess from "./MakeGuess";
import MasterMindRow from "./MasterMindRow";
import Turn from "./Turn";

class GameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      masterSequence: 1234,
      turns: []
    };
  }

  handleMasterSequence = () => {
    // const newMasterSequence = this.state.masterSequence.concat(color);
    const newMasterSequence = [ 1, 1, 1, 1 ].map((color) => {
      return Math.floor(Math.random() * 7);
    });
    return newMasterSequence;
  };

  handleAddingGuessToBoard = (newGuess) => {
    const newGuessSequence = this.state.turns.concat(newGuess);
    this.setState({ turns: newGuessSequence });
    console.log(this.state.turns);
  };

  render() {
    return (
      <div>
        <div className="ui grid">
          <div className="row">
            <div className="sixteen wide column">
              <div className="ui segment">
                <MasterMindRow sequence={this.state.masterSequence} />
              </div>
            </div>
          </div>

          {this.state.turns.map((thisTurn, index) => {
            return (
              <Turn
                // clueOne={thisTurn.clue[0]}
                // clueTwo={thisTurn.clue[1]}
                // clueThree={thisTurn.clue[2]}
                // clueFour={thisTurn.clue[3]}
                colorOne={thisTurn.colorOne}
                colorTwo={thisTurn.colorTwo}
                colorThree={thisTurn.colorThree}
                colorFour={thisTurn.colorFour}
                // turnNumber={thisTurn.turn}
                key={thisTurn.guessId}
              />
            );
          })}

          <div className="row">
            <div className="sixteen wide column">
              <div className="ui segment">
                <MakeGuess onNewGuessOnClick={this.handleAddingGuessToBoard} />
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
