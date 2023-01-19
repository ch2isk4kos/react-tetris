import React from "react";
import { StyledDisplay } from "./styles/StyledDisplay";

const Display = ({ gameOver, text }) => {
  return (
    <StyledDisplay>
      <h1>{text}</h1>
    </StyledDisplay>
  );
};

export default Display;
