import React from "react";
import { connect } from "react-redux";

import StyledApp from "./components/StyledApp";

import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default function App(props) {
  return (
    <StyledApp className="App">
      <Header />
      <TodoList />
    </StyledApp>
  );
}
