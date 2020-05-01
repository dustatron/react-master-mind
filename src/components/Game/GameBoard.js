import React from 'react';
// import ReactDom from "react-dom";
import MakeGuess from './MakeGuess';
import MasterMindRow from './MasterMindRow';
import Turn from './Turn';
import Splash from '../Layout/Splash';
import 'semantic-ui-css/semantic.min.css';
import EndModal from './EndModal';
import UserDetail from './UserDetail';
import UserUpdate from './UserUpdate';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: 0,
      masterSequence: this.handleMasterSequence(),
      user: { tag: null, GG: null },
      turns: [],
      win: null,
      lose: null
    };
  }

  handleUpdateUserShow = () => {
    this.setState({ details: 2 });
  };

  handleUpdateUserData = (userData) => {
    this.setState({ user: userData, details: 1 });
  };

  handleAddUserInfo = (userDetails) => {
    this.setState({ user: userDetails, details: 1 });
  };

  //build the master sequence
  handleMasterSequence = () => {
    const colorArr = [ 'Red', 'Green', 'Blue', 'Yellow', 'White', 'Black' ];
    let colorsLeft = colorArr;
    let colorResults = [];

    //provide a selection of 4 colors with no repeats
    for (let index = 0; index < 4; index++) {
      const randChoice = colorsLeft[Math.floor(Math.random() * colorsLeft.length)];
      colorResults.push(randChoice);
      colorsLeft = colorsLeft.filter((letter) => letter !== randChoice);
    }

    return colorResults;
  };

  handleAddingGuessToBoard = (newGuess) => {
    const newGuessArr = Object.values(newGuess).slice(0, 4);
    const masterSet = this.state.masterSequence;

    //check for matching colors. return new array of white and black.
    //fix bug for pegs returning multiple hits.
    const clueResult = masterSet
      .map((color, index) => {
        if (newGuessArr.includes(color) && newGuessArr[index] === color) {
          return 'Black';
        } else if (newGuessArr.includes(color) && newGuessArr[index] !== color) {
          return 'White';
        } else {
          return '';
        }
      })
      .sort();

    const gameString = clueResult.join(',');
    const winString = 'Black,Black,Black,Black';

    if (gameString === winString) {
      this.setState({ win: true });
      // handleOpen();
    }

    //make turn object
    const newTurn = { turn: newGuess, clue: clueResult };

    //copy turn state and add new turn object array
    const newGuessSequence = this.state.turns.concat(newTurn);

    //check for to many guesses
    if (this.state.turns.length > 8) {
      this.setState({ lose: true });
      // handleOpen();
    }

    //add turn object to state.
    this.setState({ turns: newGuessSequence });
  };

  render() {
    let showMasterSequence;
    let hidden = 'hidden';
    let endGameMessage = '';
    let endGame = '';
    const loserImg = 'https://media.giphy.com/media/rKj0oXtnMQNwY/source.gif';
    const winnerImg = 'https://media.giphy.com/media/BCdf4zEKu9A7UM7vrU/source.gif';
    let finalImage = 'https://media.giphy.com/media/rKj0oXtnMQNwY/source.gif';
    let detailsSection;

    if (this.state.details === 0) {
      detailsSection = <Splash onNewUserOnClick={this.handleAddUserInfo} />;
    } else if (this.state.details === 1) {
      detailsSection = (
        <UserDetail tag={this.state.user.tag} GG={this.state.user.GG} onUpdateOnClick={this.handleUpdateUserShow} />
      );
    } else if (this.state.details === 2) {
      detailsSection = (
        <UserUpdate onEditUserOnClick={this.handleUpdateUserData} tag={this.state.user.tag} GG={this.state.user.GG} />
      );
    }

    if (this.state.win && this.state.lose) {
      endGameMessage = 'YOU WIN!';
      hidden = '';
      endGame = 'hidden';
      showMasterSequence = <MasterMindRow sequence={this.state.masterSequence} />;
      finalImage = winnerImg;
    } else if (!this.state.win && this.state.lose) {
      endGameMessage = 'It looks like you lost the game. You loser.';
      hidden = '';
      endGame = 'hidden';
      finalImage = loserImg;
      showMasterSequence = <MasterMindRow sequence={this.state.masterSequence} />;
    } else if (this.state.win && !this.state.lose) {
      endGameMessage = 'You won, you winner!';
      hidden = '';
      endGame = 'hidden';
      showMasterSequence = <MasterMindRow sequence={this.state.masterSequence} />;
      finalImage = winnerImg;
    }

    return (
      <div>
        <div className="ui grid">
          <div className="row">
            <div className="sixteen wide column">
              <div className="ui segment">{detailsSection}</div>
            </div>
          </div>

          <div className="row">
            <div className="sixteen wide column ">
              <div className={'ui segment ' + endGame}>
                <EndModal
                  win={this.state.win}
                  lose={this.state.lose}
                  img={finalImage}
                  masterSequence={this.state.masterSequence}
                />

                <MakeGuess onNewGuessOnClick={this.handleAddingGuessToBoard} />
              </div>
            </div>
          </div>

          {this.state.turns.reverse().map((thisTurn, index) => {
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
