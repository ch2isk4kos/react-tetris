import styled from "styled-components";

const bgImg =
  "https://images.unsplash.com/photo-1599933310642-8f07bdea325a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImg});
  background-size: cover;
  overflow: hidden;
`;
