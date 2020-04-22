import React from "react";
import Clues from "./Clues";
import MakeGuess from "./MakeGuess";
import MasterMindRow from "./MasterMindRow";
import GuessTemplate from "./GuessTemplate";

function GameBoard() {
  return (
    <div>
      <h1>GameBoard</h1>
      <Clues />
      <MakeGuess />
      <GuessTemplate />
    </div>
  );
}
export default GameBoard;
