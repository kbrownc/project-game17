import React from 'react';

const Square = ({
  i,
  squares,
  setSquares,
  onClick,
  remainingAlphabet,
  setRemainingAlphabet,
  errorMessage,
  setErrorMessage,
}) => {
  const editInput = e => {
    const newSquares = JSON.parse(JSON.stringify(squares));
    const workRemainingAlphabet = JSON.parse(JSON.stringify(remainingAlphabet));
    // Add letter to available list if removed
    if (newSquares[i].letter !== '' && e.target.value === '') {
      workRemainingAlphabet.push(newSquares[i].letter)
    }
    newSquares[i].letter = e.target.value.replace(/[^a-z]/gi, '').toUpperCase();
    //console.log('squares********',remainingAlphabet)
    //
    // ensure letter is available and if so remove it from list for use next time
    //
    // ensure letter is available
    let workErrorMessage = ''
    if (workRemainingAlphabet.indexOf(e.target.value.toUpperCase()) === -1 && e.target.value !== '') {
      console.log('err msg',workRemainingAlphabet,e.target.value,workRemainingAlphabet.indexOf(e.target.value))
      workErrorMessage = 'Letter is not available'
    }
    setErrorMessage(workErrorMessage);

    // if letter entered was not '' and was not a vowel, remove it from alphabet list
    if (newSquares[i].letter !== '') {
      if (['A', 'E', 'I', 'O', 'U'].indexOf(newSquares[i].letter) === -1) {
        workRemainingAlphabet.splice(workRemainingAlphabet.indexOf(newSquares[i].letter), 1);
      }
    }
    setSquares(newSquares);
    setRemainingAlphabet(workRemainingAlphabet);
  };

  return (
    <div className="cell" style={{ gridRow: squares[i].locationRow, gridColumn: squares[i].locationCol }}>
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
  );
};

export default Square;
