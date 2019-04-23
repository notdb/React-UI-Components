import React from "react";
import "./Display.css";
import BlackBox from "./BlackBox";
import SymbolColumn from "./SymbolColumn";
import DialPad from "./DialPad";

function Calculator() {
  return (
    <div className="calc-display">
      {console.log("this is the calculator")}
      <BlackBox />
      <div className="crazy-div">
        <DialPad />
        <SymbolColumn />
      </div>
    </div>
  );
}

export default Calculator;
