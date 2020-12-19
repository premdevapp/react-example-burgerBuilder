import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";

import Aux from "../Auxilary";

const ErrorHandler = (WrappedComponent, axiosInstance) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentDidMount() {
      axiosInstance.interceptors.request.use((request) => {
        this.setState({ error: null });
        return request;
      });
      axiosInstance.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          this.setState({
            error: error,
          });
        }
      );
    }
    errorConfirmed = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.errorConfirmed}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default ErrorHandler;
