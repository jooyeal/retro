import React from "react";

interface Props {
  x: number;
  y: number;
}

function Cursor({ x, y }: Props) {
  return (
    <div
      className="absolute bg-white w-16 h-16 scale-150 rounded-full bg-opacity-50"
      style={{
        left: `${x - 32}px`,
        top: `${y - 32}px`,
        transform: "scale(3)",
      }}
    ></div>
  );
}

export default Cursor;
