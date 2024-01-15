import React from 'react';
import Square from './Square';

const Board = ({ squares, setSquares, onClick }) => {
  //console.log(squares)
  return (
    <div className="board">
      {squares.map((square, i) => (
        <Square key={i} value={square.letter} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
