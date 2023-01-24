import { useState, useCallback } from "react";
import { STAGE_WIDTH, checkCollision } from "../gameHelpers";
import { TETROMINOS, randomTetromino } from "../tetrominos";

export const usePlayer = () => {
  // player state
  const [player, setPlayer] = useState({
    position: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    isCollided: false,
  });

  const rotate = (tetromino, direction) => {
    // transpose the rows into columns
    const tetro = tetromino.map((_, index) =>
      tetromino.map((col) => col[index])
    );
    // reverse each row to rotate matrix/tetromino
    if (direction > 0) return tetro.map((row) => row.reverse());
    return tetro.reverse();
  };

  const playerRotate = (stage, direction) => {
    // make a deep copy of current player
    const clone = JSON.parse(JSON.stringify(player));

    // mutate deep copy (NOT STATE) to rotate
    clone.tetromino = rotate(clone.tetromino, direction);

    const xPosition = clone.position.x;
    let offset = 1;

    while (checkCollision(clone, stage, { x: 0, y: 0 })) {
      clone.position.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1)); // creates back/forth movement

      if (offset > clone.tetromino[0].length) {
        rotate(clone.tetromino, -direction);
        clone.position.x = xPosition;
        return;
      }
    }

    // update player state
    setPlayer(clone);
  };

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

  return [player, updatePlayerPosition, resetPlayer, playerRotate];
};
