import React from "react";

function Pegs(props) {
  return (
    <div className="peg-box">
      <div className={"peg " + props.pegOne} />
      <div className={"peg " + props.pegTwo} />
      <div className={"peg " + props.pegThree} />
      <div className={"peg " + props.pegFour} />
    </div>
  );
}
export default Pegs;
