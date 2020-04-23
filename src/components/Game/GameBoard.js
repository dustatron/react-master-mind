import React from "react";
// import ReactDom from "react-dom";
import MakeGuess from "./MakeGuess";
import MasterMindRow from "./MasterMindRow";
import Turn from "./Turn";
import Splash from "../Layout/Splash";
import Modal from "../Layout/WinLossModal";

class GameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      masterSequence: this.handleMasterSequence(),
      turns: [],
      win: null,
      lose: null
    };
  }

  handleMasterSequence = () => {
    const colorArr = [ "Red", "Green", "Blue", "Yellow", "White", "Black" ];
    // const newMasterSequence = this.state.masterSequence.concat(color);
    const newMasterSequence = [ 1, 1, 1, 1 ].map((color) => {
      return Math.floor(Math.random() * 5);
    });

    const newMasterSequenceColors = newMasterSequence.map((colorNumber) => {
      return colorArr[colorNumber];
    });
    return newMasterSequenceColors;
  };

  handleAddingGuessToBoard = (newGuess) => {
    const newGuessArr = Object.values(newGuess).slice(0, 4);

    //check for matching colors. return new array of white and black.
    //fix bug for pegs returning multiple hits.
    const clueResult = newGuessArr
      .map((color, index) => {
        if (this.state.masterSequence.includes(color) && this.state.masterSequence[index] === color) {
          return "Black";
        } else if (this.state.masterSequence.includes(color) && this.state.masterSequence[index] !== color) {
          return "White";
        } else {
          return "";
        }
      })
      .sort();

    const gameString = clueResult.join(",");
    const winString = "Black,Black,Black,Black";

    if (gameString === winString) {
      this.setState({ win: true });
    }

    //make turn object
    const newTurn = { turn: newGuess, clue: clueResult };

    //copy turn state and add new turn object array
    const newGuessSequence = this.state.turns.concat(newTurn);

    //check for to many guesses
    if (this.state.turns.length > 8) {
      this.setState({ lose: true });
    }

    //add turn object to state.
    this.setState({ turns: newGuessSequence });
  };

  render() {
    let showMasterSequence = "";
    let hidden = "hidden";
    let endGameMessage = "";
    let endGame = "";
    const loserImg = "https://media.giphy.com/media/rKj0oXtnMQNwY/source.gif";
    const winnerImg = "https://media.giphy.com/media/BCdf4zEKu9A7UM7vrU/source.gif";
    let finalImage = "https://media.giphy.com/media/rKj0oXtnMQNwY/source.gif";

    if (this.state.win && this.state.lose) {
      endGameMessage = "YOU WIN!";
      hidden = "";
      endGame = "hidden";
      showMasterSequence = <MasterMindRow sequence={this.state.masterSequence} />;
      finalImage = winnerImg;
    } else if (!this.state.win && this.state.lose) {
      endGameMessage = "It looks like you lost the game. You loser.";
      hidden = "";
      endGame = "hidden";
      finalImage = loserImg;
      showMasterSequence = <MasterMindRow sequence={this.state.masterSequence} />;
    } else if (this.state.win && !this.state.lose) {
      endGameMessage = "You won, you winner!";
      hidden = "";
      endGame = "hidden";
      showMasterSequence = <MasterMindRow sequence={this.state.masterSequence} />;
      finalImage = winnerImg;
    }

    return (
      <div>
        <Splash hidden={hidden} />
        <div className="ui grid">
          <div className="row">
            <div className="sixteen wide column">
              <div className>
                {/* <div className={hidden}> */}
                <Modal img={finalImage} message={endGameMessage} masterSequence={this.state.masterSequence} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="sixteen wide column">
              <div className={"ui segment " + endGame}>
                <MakeGuess onNewGuessOnClick={this.handleAddingGuessToBoard} />
              </div>
            </div>
          </div>

          {this.state.turns.map((thisTurn, index) => {
            return (
              <Turn
                clueOne={thisTurn.clue[0]}
                clueTwo={thisTurn.clue[1]}
                clueThree={thisTurn.clue[2]}
                clueFour={thisTurn.clue[3]}
                colorOne={thisTurn.turn.colorOne}
                colorTwo={thisTurn.turn.colorTwo}
                colorThree={thisTurn.turn.colorThree}
                colorFour={thisTurn.turn.colorFour}
                turnNumber={index + 1}
                key={thisTurn.guessId}
              />
            );
          })}
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
