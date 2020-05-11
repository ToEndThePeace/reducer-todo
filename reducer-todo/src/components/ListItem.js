import React from "react";
const ListItem = (props) => {
  const { item } = props;
  return <div className="ListItem">{item.name}</div>;
};

export default ListItem;
