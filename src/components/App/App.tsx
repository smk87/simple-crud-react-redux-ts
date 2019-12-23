import React, { Component } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { startAddUser, startDeleteUser } from "../../store/user/actions";
import { UserActionsTypes, User } from "../../store/user/types";
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
    age: "",
    id: ""
  };

  handleInput = (hEvent: InputHandlerParam): void => {
    this.setState({ [hEvent.target.name]: hEvent.target.value });
  };

  handleAdd = (hEvent: ClickHandlerParam): void => {
    this.setState(
      {
        id: this.state.name + this.state.age
      },
      () => {
        this.props.startAddUser({
          id: this.state.id,
          name: this.state.name,
          age: this.state.age
        });
      }
    );
  };

  handleDelete = (hEvent: ClickHandlerParam, user: User): void => {
    this.props.startDeleteUser(user);
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
        <UserList users={this.props.users} deleteHandler={this.handleDelete} />
      </div>
    );
  }
}

// Define reducer state prop types
const mapStateToProps = (
  state: ReduxStoreState,
  ownProps: AppProps
): LinkStateProps => ({
  users: state.user.users
});

// Define dispatcher prop types
const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, UserActionsTypes>,
  ownProps: AppProps
): LinkDispatchProps => ({
  startAddUser: bindActionCreators(startAddUser, dispatch),
  startDeleteUser: bindActionCreators(startDeleteUser, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
