import React, { useState } from 'react';
import SelectNumber from './Select';
import Board from './Board';
import { alphabet } from '../letters/Alphabet';

function App() {
  const [selectNumber, setSelectNumber] = useState(false);
  const [wordNo, setWordNo] = useState(1);
  const [numberSelected, setNumberSelected] = useState('');
  const [squares, setSquares] = useState([]);
  const [wordLengths, setWordLengths] = useState([]);
  const [remainingAlphabet, setRemainingAlphabet] = useState(alphabet);

  const restart = () => {
    setSelectNumber(false);
    setNumberSelected('');
    setWordLengths([]);
    setSquares([]);
    setWordNo(1);
    console.clear();
  };

  const handleClick = () => {
    // which squares contain 1,2,3,.....
    let wordN;
    for (let i = 1; i < wordNo + 1; i++) {
      wordN = []
      for (let j = 0; j < squares.length; j++) {
        wordN = squares.filter(event => {
          if (event.wordNums.length === 1) {
            if (event.wordNums[0] === i) {
              return true;
            }
          } else if (event.wordNums.length === 2) {
            if (event.wordNums[0] === i || event.wordNums[1] === i) {
              return true;
            }
          } else {
            return false;
          }
        });
      }
      //console.log('wordN', i, wordN);
    }
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
          squares={squares}
          setSquares={setSquares}
          wordNo={wordNo}
          setWordNo={setWordNo}
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
        <p>{remainingAlphabet}</p>
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
