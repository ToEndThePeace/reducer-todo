import React from "react";
const Header = (props) => {
  const { newValue, inputHandler, submitHandler, clearCompleted } = props;
  return (
    <header>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="newValue"
          placeholder="New Task..."
          value={newValue}
          onChange={inputHandler}
        />
        <div>
          <input type="submit" name="submit" value="Add Task" />
          <button onClick={clearCompleted}>Clear Completed</button>
        </div>
      </form>
    </header>
  );
};

export default Header;
