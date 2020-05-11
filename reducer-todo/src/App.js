import React, { useReducer } from "react";

import StyledApp from "./components/StyledApp";

import Header from "./components/Header";
import TodoList from "./components/TodoList";

import data from "./data/data";

export default function App(props) {
  const [state, dispatch] = useReducer(...data);

  const inputHandler = (e) => {
    const { value } = e.target;
    dispatch({ type: "SET_INPUT", payload: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: state.newValue });
  };

  const toggleComplete = (id) => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  };

  const clearCompleted = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <StyledApp className="App">
      <Header
        newValue={state.newValue}
        inputHandler={inputHandler}
        submitHandler={submitHandler}
        clearCompleted={clearCompleted}
      />
      <TodoList list={state.list} toggleComplete={toggleComplete} />
    </StyledApp>
  );
}
