import React from "react";
import "./Display.css";
import NumberButton from "../ButtonComponents/NumberButton";
import ActionButton from "../ButtonComponents/ActionButton";

const longArray = [
  "clear",
  "%",
  7,
  8,
  9,
  "*",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  0,
  "="
];

function LongTest() {
  return (
    <div className="long-test-pad">
      {longArray.map(lng => {
        if (lng === "clear" || lng === 0) {
          return <ActionButton act={lng} />;
        } else {
          return <NumberButton num={lng} />;
        }
      })}
    </div>
  );
}

export default LongTest;
