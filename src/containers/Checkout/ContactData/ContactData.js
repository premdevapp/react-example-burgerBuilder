import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";

import classes from "./ContactData.module.scss";

import axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    phone: "77777777777",
    address: {
      street: "",
      zipCode: "",
      country: "India",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);
    this.setState({
      loading: true,
    });
    const orderData = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Premnath",
        address: {
          street: "No-13, IInd cross street, Pudhu nagar, Pondicherry",
          zipCode: "605014",
          country: "India",
        },
        email: "test@test.com",
        phone: "+917777777777",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", orderData)
      .then((response) => {
        console.log(response);
        this.setState({
          loading: false,
        });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          loading: false,
        });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <input
          className={classes.Input}
          type="tel"
          name="phone"
          placeholder="Your Phone"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Your Street"
        />
        <input
          className={classes.Input}
          type="text"
          name="zipcode"
          placeholder="Your ZipCode"
        />
        <Button clicked={this.orderHandler} buttonType="Success">
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Details</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
