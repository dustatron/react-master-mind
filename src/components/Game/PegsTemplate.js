import React from "react";

function Pegs(props) {
  return (
    <div className="peg-box">
      <div className={"peg pin-" + props.pegOne} />
      <div className={"peg pin-" + props.pegTwo} />
      <div className={"peg pin-" + props.pegThree} />
      <div className={"peg pin-" + props.pegFour} />
    </div>
  );
}
export default Pegs;
