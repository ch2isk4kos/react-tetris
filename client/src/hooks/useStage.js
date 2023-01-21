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
    };

    setStage((prev) => updateStage(prev));
  }, []);

  return [stage, setStage, rowsCleared];
};
