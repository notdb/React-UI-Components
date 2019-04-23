import React from "react";
import "./Button.css";

function ActionButton(prop) {
  return <div className="action-button">{prop.act}</div>;
}

export default ActionButton;
