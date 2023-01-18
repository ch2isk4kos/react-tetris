import React from "react";

const Display = ({ gameOver, text }) => {
  return (
    <div className="Display">
      <h1>{text}</h1>
    </div>
  );
};

export default Display;
