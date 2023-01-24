export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. check for a tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. check if move is out of bounds in height (y)
          !stage[y + player.position.y + moveY] ||
          // 4. check that cell isn't set to "clear"
          !stage[y + player.position.y + moveY][
            x + player.position.x + moveX
          ] ||
          // 4. Check that the cell wer'e moving to isn't set to clear
          stage[y + player.position.y + moveY][
            x + player.position.x + moveX
          ][1] !== "clear"
        ) {
          return true;
        }
      }
    }
  }
  // 5. if all of the above is false...
  return false;
};
