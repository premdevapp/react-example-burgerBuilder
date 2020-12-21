import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

import Aux from "./hoc/Auxilary";

import "./App.module.scss";

class App extends Component {
  state = {
    show: true,
  };
  /*
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: false,
      });
    }, 5000);
  }

 */
  render() {
    return (
      <div>
        <Layout>
          {this.state.show ? (
            <Aux>
              {/* <BurgerBuilder /> <Checkout /> */}
              <Switch>
                <Route path="/checkout" component={Checkout} />
                <Route path="/orders" component={Orders} />
                <Route path="/" component={BurgerBuilder} />
              </Switch>
            </Aux>
          ) : null}
        </Layout>
      </div>
    );
  }
}

export default App;
