import React from "react";
import "./App.css";
import Header from "./Layout/Header";
import Splash from "./Layout/Splash";
import GameBoard from "./Game/GameBoard";

function App() {
  return (
    <div className="App">
      <Header />
      <Splash />
      <GameBoard />
      <h1> Master Mind App </h1>
    </div>
  );
}

export default App;
