import React from "react";
import Aux from "../../hoc/Auxilary";
import Toolbar from "../Navigation/Toolbar/Toolbar";

import classes from "./Layout.module.scss";
const layout = (props) => (
  <Aux>
    <div> Toolbar, SideDrawer, BackDrop </div>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
