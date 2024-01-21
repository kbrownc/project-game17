import React, { useState } from 'react';
import SelectNumber from './Select';
import Board from './Board';

function App() {
  const [selectNumber, setSelectNumber] = useState(false);
  const [numberSelected, setNumberSelected] = useState('');
  const [squares, setSquares] = useState([]);
  const [wordLengths, setWordLengths] = useState([]);

  const restart = () => {
    setSelectNumber(false);
    setNumberSelected('');
    setWordLengths([]);
    setSquares([]);
  };

  const handleClick = () => {
    console.log('handleClick',squares[0].letter,squares[1].letter,squares[2].letter);
  };

  return (
    <>
      <h1>Game17</h1>
      {!selectNumber ? (
        <SelectNumber
          numberSelected={numberSelected}
          setNumberSelected={setNumberSelected}
          setSelectNumber={setSelectNumber}
          wordLengths={wordLengths}
          setWordLengths={setWordLengths}
          setSquares={setSquares}
        />
      ) : (
        <div>
          <Board squares={squares} setSquares={setSquares} onClick={handleClick} />
          <button className="restart" onClick={() => handleClick()}>
            Done
          </button>
        </div>
      )}
      <div className="info-wrapper">
        <button className="restart" onClick={() => restart()}>
          Restart
        </button>
        <div>
          {numberSelected} {wordLengths}
        </div>
      </div>
    </>
  );
}

export default App;
