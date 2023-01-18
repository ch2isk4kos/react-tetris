import React, { useState } from "react";

// styled-components
import { StyledTetrisWrapper } from "./styles/StyledTetrisWrapper";
import { StyledTetris } from "./styles/StyledTetris";

// helpers
import { createStage } from "../gameHelpers";

// hooks

// components
import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <h1>Tetris</h1>
        <Stage stage={createStage()} />
        {/* <Stage stage={stage} /> */}
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
