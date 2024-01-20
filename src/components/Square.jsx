import React from 'react';

const Square = ({ i, squares, setSquares, onClick }) => {

  const editInput = e => {
    const newSquares = JSON.parse(JSON.stringify(squares));
    newSquares[i].letter = e.target.value.replace(/[^a-z]/gi, '').toUpperCase();
    setSquares(newSquares);
  };

  return (
    <div className="cell" style={{gridRow: squares[i].locationRow, gridColumn: squares[i].locationCol}} >
        <input
          required
          name="cell+square"
          className="redsquares"
          type="text"
          value={squares[i].letter}
          maxLength="1"
          onChange={editInput}
        />
    </div>
  )
};

export default Square;
