import React, { Component } from "react";

import Button from "../../UI/Button/Button";

import Aux from "../../../hoc/Auxilary";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("OrderSummary will Update");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious Burger with following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total: ${this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.purchaseCancel} buttonType="Danger">
          Cancel
        </Button>
        <Button clicked={this.props.purchaseContinue} buttonType="Success">
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
