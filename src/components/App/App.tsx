import React, { Component } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { startAddUser } from "../../store/user/actions";
import { UserActionsTypes } from "../../store/user/types";
import { InputHandlerParam, ClickHandlerParam } from "../../types";
import {
  AppProps,
  AppState,
  LinkDispatchProps,
  LinkStateProps
} from "./interfaces";
import Input from "../Input/Input";
import UserList from "../UserList/UserList";
import { ReduxStoreState } from "../../store";
import "../../App.css";

// Combine All types of props
type Props = AppProps & LinkDispatchProps & LinkStateProps;

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
        <h1>Simple CRUD App with React-Redux-TS</h1>
        <br />
        <br />
        <Input type="text" label="name" inputHandler={this.handleInput} />
        <Input type="number" label="age" inputHandler={this.handleInput} />
        <button onClick={this.handleAdd}>Add</button>
        <br />
        <br />
        <UserList users={this.props.users} />
      </div>
    );
  }
}

const mapStateToProps = (
  state: ReduxStoreState,
  ownProps: AppProps
): LinkStateProps => ({
  users: state.user.users
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, UserActionsTypes>,
  ownProps: AppProps
): LinkDispatchProps => ({
  startAddUser: bindActionCreators(startAddUser, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
