import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

import LoadingSpinner from "../../components/UI/Spinner/Spinner";

import axios from "../../axios-orders";

import Aux from "../../hoc/Auxilary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.3,
  meat: 1.3,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 0.85,
      purchaseable: false,
      purchasing: false,
      loading: false,
    };
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((total, prev) => {
        return total + prev;
      }, 0);

    this.setState({
      purchaseable: sum > 0,
    });
  }

  addIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] <= 0) return;

    const updatedCount = this.state.ingredients[type] - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice - priceDeduction;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    });
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  purchaseContinueHandler = () => {
    console.log("you continue");
    this.setState({
      loading: true,
    });
    const orderData = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Premnath",
        address: {
          street: "No-13, IInd cross street, Pudhu nagar, Pondicherry",
          zipCode: "605014",
          country: "India",
        },
        email: "test@test.com",
        phone: "77777777777",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", orderData)
      .then((response) => {
        console.log(response);
        this.setState({
          loading: false,
          purchasing: false,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          loading: false,
          purchasing: false,
        });
      });
  };

  //render lifecycle
  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        purchaseCancel={this.purchaseCancelHandler}
        purchaseContinue={this.purchaseContinueHandler}
        ingredients={this.state.ingredients}
        price={this.state.totalPrice}
      />
    );

    if (this.state.loading) orderSummary = <LoadingSpinner />;
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientDeducted={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
