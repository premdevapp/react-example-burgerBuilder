import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";

import Logo from "../../Logo/Logo";

import classes from "./Toolbar.module.scss";
const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo height="80%" margin={2} />
    <nav className={classes.Desktop}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
