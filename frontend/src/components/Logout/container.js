import React, {Component} from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import {actionCreators as userActions} from "redux/modules/user";

class Container extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };
  componentWillMount() {
    this.props.dispatch(userActions.logout());
  }
  render() {
    return (
      <Redirect to="/" />
    );
  }
}

export default Container;