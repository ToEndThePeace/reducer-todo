import React from "react";
import ListItem from "./ListItem";

const TodoList = (props) => {
  const { list, toggleComplete } = props;
  return (
    <section>
      {list.map((item, i) => {
        return <ListItem item={item} key={i} toggleComplete={toggleComplete} />;
      })}
    </section>
  );
};
export default TodoList;
