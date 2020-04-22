import React from "react";
import "./App.css";
import Header from "./Layout/Header";
import Splash from "./Layout/Splash";
import GameBoard from "./Game/GameBoard";

function App() {
  return (
    <div className="ui container">
      <Header />
      <h1> Master Mind App </h1>
      <Splash />
      <GameBoard />
    </div>
  );
}

export default App;
