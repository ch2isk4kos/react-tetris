import React from "react";

// components
import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";

const Tetris = ({}) => {
  return (
    <div className="Tetris">
      <h1>Tetris</h1>
      <Stage />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButton />
      </aside>
    </div>
  );
};

export default Tetris;
