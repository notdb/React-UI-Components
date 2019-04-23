import React from "react";
import "./Display.css";
import NumberButton from "../ButtonComponents/NumberButton";
import ActionButton from "../ButtonComponents/ActionButton";

const numArray = [7, 8, 9, 4, 5, 6, 1, 2, 3];

function DialPad() {
  return (
    <div className="dial-pad">
      <ActionButton act="clear" />
      <div className="dial-a-number">
        {numArray.map(num => {
          return <NumberButton num={num} />;
        })}
      </div>
      <ActionButton act="0" />
    </div>
  );
}

export default DialPad;
