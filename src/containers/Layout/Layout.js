import React, { Component } from "react";
import { connect } from "react-redux";
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

  render() {
    return (
      <Aux>
        <Toolbar
          isAuth={this.props.isAuthenticated}
          open={this.state.show}
          close={this.handler.sideDrawer}
        />
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.show}
          close={this.handler.sideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
