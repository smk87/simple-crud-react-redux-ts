import React, { Component } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { startAddUser } from "./store/user/actions";
import { UserActionsTypes, User } from "./store/user/types";

import "./App.css";

import Input from "./Input";

interface AppProps {}

interface AppState {
  [key: string]: string;
}

interface LinkDispatchProps {
  startAddUser: (user: User) => void;
}

export type InputHandlerParam = React.ChangeEvent<HTMLInputElement>;
export type ClickHandlerParam = React.MouseEvent;

type Props = AppProps & LinkDispatchProps;

class App extends Component<Props, AppState> {
  state = {
    name: "",
    age: ""
  };

  handleInput = (hEvent: InputHandlerParam): void => {
    this.setState({ [hEvent.target.name]: hEvent.target.value });
  };

  handleAdd = (hEvent: ClickHandlerParam): void => {
    this.props.startAddUser({
      name: this.state.name,
      age: this.state.age
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Simple CRUD App</h1>
        <br />
        <br />
        <Input type="text" label="name" inputHandler={this.handleInput} />
        <Input type="number" label="age" inputHandler={this.handleInput} />
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, UserActionsTypes>,
  ownProps: AppProps
): LinkDispatchProps => ({
  startAddUser: bindActionCreators(startAddUser, dispatch)
});

export default connect(null, mapDispatchToProps)(App);
