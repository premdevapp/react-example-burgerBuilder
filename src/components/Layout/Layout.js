import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

import classes from "./Layout.module.scss";

class Layout extends Component {
  state = {
    show: true,
  };
  handler = {
    sideDrawer: () => {
      this.state.show
        ? this.setState({ show: false })
        : this.setState({ show: true });
    },
  };
  render() {
    return (
      <Aux>
        <Toolbar open={this.state.show} close={this.handler.sideDrawer} />
        <SideDrawer open={this.state.show} close={this.handler.sideDrawer} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
