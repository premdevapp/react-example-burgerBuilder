import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

import * as actions from "../../store/actions/index";

import classes from "./Auth.module.scss";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "enter your email",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "enter your password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 7,
        },
        valid: false,
        touched: false,
      },
    },
    isSignUp: true,
  };

  checkValidation(value, rules) {
    let isValid = true;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = (value.length >= 7 || value.length >= 10) && isValid;
    }
    if (rules.maxLength) {
      isValid = (value.length <= 7 || value.length <= 10) && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid; //RegExp.test returns a boolean
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangehandler = (event, controlName) => {
    const updatedControlsForm = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidation(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true,
      },
    };
    this.setState({ controls: updatedControlsForm });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignUp
    );
  };

  switchAuthModeHandler = () => {
    this.setState((prevState) => {
      return {
        isSignUp: !prevState.isSignUp,
      };
    });
  };

  render() {
    let inputFields = [];
    for (let key in this.state.controls) {
      inputFields.push({
        id: key,
        config: this.state.controls[key],
      });
    }

    const form = inputFields.map((input) => (
      <Input
        key={input.id}
        elementType={input.config.elementType}
        elementConfig={input.config.elementConfig}
        value={input.config.value}
        invalid={!input.config.valid}
        touched={input.config.touched}
        changed={(event) => this.inputChangehandler(event, input.id)}
      />
    ));

    return (
      <div className={classes.AuthData}>
        <form onSubmit={this.submitHandler}>
          {form}
          <Button buttonType="Success">Submit</Button>
        </form>
        <Button buttonType="Danger" clicked={this.switchAuthModeHandler}>
          SWITCH to {this.state.isSignUp ? "SignIn" : "SignUp"}
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp)),
  };
};

export default connect(null, mapDispatchToProps)(Auth);
