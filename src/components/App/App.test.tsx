import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "../../store";

// Smoke test
it("Smoke Test: renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={configureStore()}>
      <App />
    </Provider>,
    div
  );
});

// Snapshot test
it("Snapshot Test: renders without crashing", () => {
  const tree = renderer
    .create(
      <Provider store={configureStore()}>
        <App />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
