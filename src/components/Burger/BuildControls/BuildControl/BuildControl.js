import React from "react";
import classes from "./BuildControl.module.scss";

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button onClick={props.added} className={classes.More}>
      +
    </button>
    <button
      disabled={props.disabled}
      onClick={props.deducted}
      className={classes.Less}
    >
      -
    </button>
  </div>
);

export default buildControl;
