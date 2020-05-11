import React from "react";
const ListItem = (props) => {
  const { item, toggleComplete } = props;
  return (
    <div
      className={`ListItem${item.completed ? " completed" : ""}`}
      onClick={() => toggleComplete(item.id)}
    >
      <h2>{item.name}</h2>
    </div>
  );
};

export default ListItem;
