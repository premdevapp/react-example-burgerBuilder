import React from "react";
import classes from "./Button.module.scss";

const button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={[classes.Button, classes[props.buttonType]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};
export default button;