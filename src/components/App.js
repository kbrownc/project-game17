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
  const [errorMessage, setErrorMessage] = useState('');

  const restart = () => {
    setSelectNumber(false);
    setNumberSelected('');
    setWordLengths([]);
    setSquares([]);
    setWordNo(1);
    setErrorMessage('');
    console.clear();
  };

  const handleClick = () => {
    // which squares contain 1s,2s,3s,.....
    let wordN;
    let result = '';
    let result1 = '';
    for (let i = 1; i < wordNo + 1; i++) {
      wordN = [];
      for (let j = 0; j < squares.length; j++) {
        wordN = squares.filter(event => {
          if (event.wordNums.length === 1) {
            if (event.wordNums[0] === i) {
              return true;
            } else {
              return false
            }
          } else if (event.wordNums.length === 2) {
            if (event.wordNums[0] === i || event.wordNums[1] === i) {
              return true;
            } else {
              return false
            }
          } else {
            return false; 
          }
        });
      }
      // temp cpde
      result1 = '';
      for (let k = 0; k < wordN.length; k++) {
        result1 = result1 + wordN[k].letter;
      }
      result = result + ' ' + result1;
    }
    console.log(result);

    // final solution
    //
    // 1) verify each word is a valid word else display invalie word with err msg
    //
    // 2) calculate score if all words are valid
    //
  };

  return (
    <>
      <h1>Game17</h1>
      <p>{errorMessage}</p>
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
          <Board
            squares={squares}
            setSquares={setSquares}
            onClick={handleClick}
            remainingAlphabet={remainingAlphabet}
            setRemainingAlphabet={setRemainingAlphabet}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            numberSelected={numberSelected}
          />
          }
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
