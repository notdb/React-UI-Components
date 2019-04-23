import React from "react";
import "./Display.css";
import NumberButton from "../ButtonComponents/NumberButton";

function SymbolColumn() {
  return (
    <div className="five-symbol">
      <NumberButton num="%" />
      <NumberButton num="X" />
      <NumberButton num="-" />
      <NumberButton num="+" />
      <NumberButton num="=" />
    </div>
  );
}

export default SymbolColumn;
