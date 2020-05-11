import React from "react";
const Header = (props) => {
  const { newValue, inputHandler, submitHandler, clearCompleted } = props;
  return (
    <header>
      <form onSubmit={submitHandler}>
        <label>New Task:&nbsp;</label>
        <input
          type="text"
          name="newValue"
          value={newValue}
          onChange={inputHandler}
        />
        <input type="submit" name="submit" value="Add Task" />
      </form>
      <button onClick={clearCompleted}>Clear Completed</button>
    </header>
  );
};

export default Header;
