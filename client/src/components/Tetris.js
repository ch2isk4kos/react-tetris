import React, { useState } from "react";

// styled-components
import { StyledTetrisWrapper } from "./styles/StyledTetrisWrapper";
import { StyledTetris } from "./styles/StyledTetris";

// helpers
import { createStage } from "../gameHelpers";

// hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

// components
import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const player = usePlayer();
  const stage = useStage();

  console.log("re-render");
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
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
