import React, { useState } from 'react';
import SelectNumber from './Select';
import Board from './Board';

function App() {
  const [selectNumber, setSelectNumber] = useState(false);
  const [numberSelected, setNumberSelected] = useState('');
  const [squares, setSquares] = useState(Array(64).fill('1'))
  const [wordLengths, setWordLengths] = useState([]);

  const restart = () => {
    setSelectNumber(false);
    setNumberSelected('');
    setWordLengths([]);
  };

  const handleClick = () => {
    console.log('handleClick');
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
        />
      ) : (
        <Board squares={squares} setSquares={setSquares} onClick={handleClick} />
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
