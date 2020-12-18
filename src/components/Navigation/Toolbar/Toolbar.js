import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

import Logo from "../../Logo/Logo";

import classes from "./Toolbar.module.scss";
const toolbar = (props) => {
  return props.open ? (
    <header className={classes.Toolbar}>
      <Logo height="80%" />
      <nav className={classes.Desktop}>
        <NavigationItems />
      </nav>
    </header>
  ) : (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.close} />
      <Logo height="80%" />
      <nav className={classes.Desktop}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
