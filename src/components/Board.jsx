import React from 'react';
import Square from './Square';

const Board = ({ squares, setSquares, onClick }) => {

  return (
    <div className="board">
      {squares.map((square, i) => (
        <Square key={i} i={i} squares={squares} setSquares={setSquares} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
