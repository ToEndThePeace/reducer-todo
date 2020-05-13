import React from "react";
import { connect } from "react-redux";
import { clearCompleted, addTodo, setInput } from "../actions/actions";
const Header = (props) => {
  const { newValue, addTodo, setInput, clearCompleted } = props;

  const change = (e) => {
    setInput(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    addTodo(newValue);
  };
  const clear = (e) => {
    e.preventDefault();
    clearCompleted();
  };
  return (
    <header>
      <form onSubmit={submit}>
        <input
          type="text"
          name="newValue"
          placeholder="New Task..."
          value={newValue}
          onChange={change}
        />
        <div>
          <input type="submit" name="submit" value="Add Task" />
          <button onClick={clear}>Clear Completed</button>
        </div>
      </form>
    </header>
  );
};

const mapStateToProps = (state) => {
  return { newValue: state.newValue };
};

export default connect(mapStateToProps, { clearCompleted, addTodo, setInput })(
  Header
);
