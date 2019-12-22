import React, { Component } from "react";
import "./App.css";
import Input from "./Input";

export type InputHandlerParam = React.ChangeEvent<HTMLInputElement>;

interface AppProps {}

interface AppState {
  [key: string]: string;
}

export class App extends Component<AppProps, AppState> {
  state = {
    name: "",
    age: ""
  };

  handleInput = (hEvent: InputHandlerParam): void => {
    this.setState({ [hEvent.target.name]: hEvent.target.value }, () => {
      console.log(this.state);
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
      </div>
    );
  }
}

export default App;
