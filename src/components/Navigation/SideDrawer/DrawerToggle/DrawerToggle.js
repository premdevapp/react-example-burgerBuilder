import React from "react";

import classes from "./DrawerToggle.module.scss";

const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    {/* <i className="fa fa-bars" aria-hidden="true"></i> */}
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
