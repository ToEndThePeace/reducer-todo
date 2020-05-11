import React from "react";
import styled from "styled-components";

function App() {
  return (
    <StyledApp className="App">
      <div>hello world</div>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  background-color: red;
  min-height: 100vh;
`;

export default App;
