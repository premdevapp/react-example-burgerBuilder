import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

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
              <BurgerBuilder /> <Checkout />
            </Aux>
          ) : null}
        </Layout>
      </div>
    );
  }
}

export default App;
