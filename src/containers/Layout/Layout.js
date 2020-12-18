import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

import classes from "./Layout.module.scss";

class Layout extends Component {
  state = {
    show: false,
  };
  handler = {
    sideDrawer: () => {
      this.state.show
        ? this.setState({ show: false })
        : this.setState({ show: true });
    },
  };

  /*   sideDrawerClosedHandler = () => {
    this.setState({ show: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { show: !prevState.show };
    });
  };
 */
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
