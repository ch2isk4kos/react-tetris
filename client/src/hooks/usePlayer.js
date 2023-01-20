import { useState, useCallback } from "react";
import { STAGE_WIDTH, checkCollision } from "../gameHelpers";
import { TETROMINOS, randomTetromino } from "../tetrominos";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    position: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    isCollided: false,
  });

  const updatePlayerPosition = ({ x, y, isCollided }) => {
    setPlayer((prev) => ({
      ...prev,
      position: { x: (prev.position.x += x), y: (prev.position.y += y) },
      isCollided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      position: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      isCollided: false,
    });
  }, []);

  return [player, updatePlayerPosition, resetPlayer];
};
