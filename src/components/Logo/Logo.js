import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.scss";

const logo = (props) => {
  return (
    <div
      className={classes.Logo}
      style={{ height: props.height, margin: props.margin }}
    >
      <img src={burgerLogo} alt="burger logo" />
    </div>
  );
};

export default logo;
