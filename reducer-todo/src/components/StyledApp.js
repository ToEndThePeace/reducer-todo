import styled from "styled-components";

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
    .ListItem {
      &.completed {
        text-decoration: underline;
      }
    }
  }
`;

export default StyledApp;
