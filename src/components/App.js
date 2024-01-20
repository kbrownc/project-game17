import React, { useState } from 'react';
import SelectNumber from './Select';
import Board from './Board';

function App() {
  const [selectNumber, setSelectNumber] = useState(false);
  const [numberSelected, setNumberSelected] = useState('');
  const [squares, setSquares] = useState([])
  const [wordLengths, setWordLengths] = useState([]);

  const restart = () => {
    setSelectNumber(false);
    setNumberSelected('');
    setWordLengths([]);
    setSquares([])
  };

  const test = () => {
    let testSquares = [];
    let i = 4;
    let workSquare = {
        letter: '',
        locationRow: i + ' / ' + (i+1), 
        locationCol: i + ' / 5', 
    };
    testSquares.push(workSquare);
    workSquare = {
        letter: '',
        locationRow: '7 / 8', 
        locationCol: '8 / 8', 
    };
    testSquares.push(workSquare);
    setSquares(testSquares)
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
        <Board 
          squares={squares} 
          setSquares={setSquares} 
          onClick={handleClick} 
        />
      )}
      <div className="info-wrapper">
        <button className="restart" onClick={() => restart()}>
          Restart
        </button>
        <button className="restart" onClick={() => handleClick()}>
          Done
        </button>
        <button className="restart" onClick={() => test()}>
          Test
        </button>
        <div>
          {numberSelected} {wordLengths}
        </div>
      </div>
    </>
  );
}

export default App;
