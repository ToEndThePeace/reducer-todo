import React from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";

const TodoList = (props) => {
  const { list } = props;
  return (
    <section>
      <div>
        <h1 className="title">Tasks:</h1>
        <div>
          {list
            .filter((x) => !x.completed)
            .map((item, i) => {
              return <ListItem item={item} key={i} />;
            })}
        </div>
      </div>
      <div>
        <h3 className="title">Completed:</h3>
        <div>
          {list
            .filter((x) => x.completed)
            .map((item, i) => {
              return <ListItem item={item} key={i} />;
            })}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list
  };
};

export default connect(mapStateToProps, {})(TodoList);
