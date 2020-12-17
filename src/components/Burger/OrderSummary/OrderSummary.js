import React from "react";

import Button from "../../UI/Button/Button";

import Aux from "../../../hoc/Auxilary";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious Burger with following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchaseCancel} buttonType="Danger">
        Cancel
      </Button>
      <Button clicked={props.purchaseContinue} buttonType="Success">
        Continue
      </Button>
    </Aux>
  );
};

export default orderSummary;
