import React from "react";

function MasterMindRow(props) {
  return (
    <div className="master-sequence">
      {props.sequence.map((color) => <div className={"colored-pin pin-" + color} />)}
    </div>
  );
}
export default MasterMindRow;
