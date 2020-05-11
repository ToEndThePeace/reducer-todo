import React from "react";
import ListItem from "./ListItem";

const TodoList = (props) => {
  const { list } = props;
  return (
    <section>
      {list.map((item, i) => {
        return <ListItem item={item} key={i} />;
      })}
    </section>
  );
};
export default TodoList;
