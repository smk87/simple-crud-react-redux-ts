import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
// import { ReduxStoreState } from "./store";
import { addUser } from "./store/user/actions";

import Input from "./Input";

interface AppProps {
  addUser: typeof addUser;
}

interface AppState {
  [key: string]: string;
}

export type InputHandlerParam = React.ChangeEvent<HTMLInputElement>;
export type ClickHandlerParam = React.MouseEvent;

class App extends Component<AppProps, AppState> {
  state = {
    name: "",
    age: ""
  };

  handleInput = (hEvent: InputHandlerParam): void => {
    this.setState({ [hEvent.target.name]: hEvent.target.value });
  };

  handleAdd = (hEvent: ClickHandlerParam): void => {
    this.props.addUser({
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

export default connect(null, { addUser })(App);
