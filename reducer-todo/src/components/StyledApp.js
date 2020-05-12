import styled from "styled-components";

const colors = {
  dark: "#232931",
  med: "#393E46",
  blue: "#4ecca3",
  white: "#eee"
};

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  header {
    height: 20vh;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.dark};
    form {
      & > input {
        font-family: "Lato", sans-serif;
        padding: 10px;
        font-size: 1.5em;
        margin-bottom: 3vh;
        text-align: center;
        color: ${colors.white};
        border: 1px solid ${colors.blue};
        background-color: ${colors.med};
        &::placeholder {
          font-weight: 300;
          color: ${colors.blue};
        }
      }
      div {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        & > * {
          font-family: "Lato", sans-serif;
          padding: 10px;
          background-color: ${colors.med};
          color: ${colors.blue};
          cursor: pointer;
          border-bottom: 5px solid ${colors.blue};
          border-radius: 0 0 5px 5px;
          &:hover {
            background-color: ${colors.blue};
            color: ${colors.dark};
          }
        }
      }
    }
  }
  section {
    padding: 20px 10px;
    font-family: "Lato", sans-serif;
    flex-grow: 1;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    background: ${colors.med};
    border-top: 1px solid ${colors.blue};
    .ListItem {
      cursor: pointer;
      margin: 2vh 2%;
      padding: 20px 40px;
      max-width: 20%;
      background-color: ${colors.dark};
      color: ${colors.white};
      border-left: 5px solid ${colors.blue};
      border-right: 5px solid ${colors.dark};
      border-radius: 0 10px 10px 0;
      &.completed {
        background-color: ${colors.blue};
        color: ${colors.med};
        border-right-color: ${colors.blue};
        text-decoration: line-through;
      }
    }
  }
`;

export default StyledApp;
