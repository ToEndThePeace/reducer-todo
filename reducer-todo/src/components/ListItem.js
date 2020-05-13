import React from "react";
import { connect } from "react-redux";

import { toggleComplete } from "../actions/actions";

const ListItem = (props) => {
  const { item, toggleComplete } = props;
  return (
    <div
      className={`ListItem${item.completed ? " completed" : ""}`}
      onClick={() => toggleComplete(item.id)}
    >
      <h2>{item.name}</h2>
      {item.timestamp && <span>Completed: {item.timestamp}</span>}
    </div>
  );
};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, { toggleComplete })(ListItem);
