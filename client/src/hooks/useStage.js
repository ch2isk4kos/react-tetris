import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";

export const usePlayer = () => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  return [stage, setStage, rowsCleared];
};
