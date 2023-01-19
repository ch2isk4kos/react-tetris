import { useState, useCallback } from "react";
import { TETROMINOS, randomTetromino } from "../tetrominos";
// import { STAGE_WIDTH, checkCollision } from "../gameHelpers";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    isCollided: false,
  });

  return [player];
};
