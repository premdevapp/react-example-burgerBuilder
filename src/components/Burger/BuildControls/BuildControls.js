import React from "react";

import BuildControl from "./BuildControl/BuildControl";

import classes from "./BuildControls.module.scss";

//an array of build key value pairs for controls
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p style={{ textAlign: "center" }}>
      <strong>${props.price.toFixed(2)}</strong>
    </p>
    {controls.map((item) => (
      <BuildControl
        key={item.label}
        label={item.label}
        added={() => props.ingredientAdded(item.type)}
        deducted={() => props.ingredientDeducted(item.type)}
        disabled={props.disabled[item.type]}
      />
    ))}
    {/* <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordering}
    >
      Checkout
    </button> */}
  </div>
);

export default buildControls;
