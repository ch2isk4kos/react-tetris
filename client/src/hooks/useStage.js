import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    const updateStage = (prevStage) => {
      // clear stage from previous render
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );
      // draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.position.y][x + player.position.x] = [
              value,
              `${player.isCollided ? "merged" : "clear"}`,
            ];
          }
        });
      });
      // check for collision
      if (player.isCollided) resetPlayer();

      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [
    player.isCollided,
    player.position.x,
    player.position.y,
    player.tetromino,
    resetPlayer,
  ]);

  return [stage, setStage, rowsCleared];
};
