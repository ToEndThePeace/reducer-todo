import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import TodoList from "./components/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <StyledApp className="App">
        <Header />
        <TodoList list={[{name: "dance"}, {name: "sing"}]} />
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  header {
    background: blue;
    height: 15vh;
    position: sticky;
    top: 0;
    left: 0;
  }
  section {
    flex-grow: 1;
    background: green;
  }
`;

export default App;
