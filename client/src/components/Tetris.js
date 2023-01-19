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
  const [stage, setStage] = useStage(player);

  console.log("re-render");
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {isGameOver ? (
            <Display gameOver={isGameOver} text={"Game Over"} />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
