import React, { useState } from 'react';
import SelectNumber from './Select';
import Board from './Board';

function App() {
  const [selectNumber, setSelectNumber] = useState(false);
  const [numberSelected, setNumberSelected] = useState('');
  const [squares, setSquares] = useState([1, 2, 3,4,5,6,7,8,9,10,11,12]);
  const [wordLengths, setWordLengths] = useState([]);

  const restart = () => {
    setSelectNumber(false);
    setNumberSelected('');
    setWordLengths([]);
  };

  const handleClick = () => {
    console.log('handleClick')
  };

  return (
    <>
      <h1>Game17</h1>
      {!selectNumber ? (
        <SelectNumber numberSelected={numberSelected} setNumberSelected={setNumberSelected}
        setSelectNumber={setSelectNumber} wordLengths={wordLengths} setWordLengths={setWordLengths} />
      ) : (
        <Board squares={squares} onClick={handleClick} />
      )}
      <div className="info-wrapper">
        <button className="restart" onClick={() => restart()}>Restart</button>
        <div>{numberSelected} {wordLengths}</div>
      </div>
    </>
  );
}

export default App;
