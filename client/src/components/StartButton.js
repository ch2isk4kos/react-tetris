import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = ({ callback }) => {
  return (
    <StyledStartButton onClick={callback}>
      <h1>Start Game</h1>
    </StyledStartButton>
  );
};

export default StartButton;
