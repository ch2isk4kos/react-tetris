import { useState, useCallback } from "react";
import { TETROMINOS, randomTetromino } from "../tetrominos";
// import { STAGE_WIDTH, checkCollision } from "../gameHelpers";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    position: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    isCollided: false,
  });

  const updatePlayerPosition = ({ x, y, isCollided }) => {
    //
    setPlayer((prev) => ({
      ...prev,
      position: { x: (prev.position.x += x), y: (prev.position.y += y) },
      isCollided,
    }));
  };

  const resetPlayer = () => {
    //
  };

  return [player, updatePlayerPosition, resetPlayer];
};
