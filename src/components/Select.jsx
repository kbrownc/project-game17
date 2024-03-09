import React from 'react';

const SelectNumber = ({
  numberSelected,
  setNumberSelected,
  setSelectNumber,
  wordLengths,
  setWordLengths,
  squares,
  setSquares,
  wordNo,
  setWordNo,
}) => {
  const lengthList = [2, 3, 4, 5];

  const getRandonNumber = (start, end) => {
    let random = Math.floor(Math.random() * end + start);
    while (random > end) {
      random = Math.floor(Math.random() * end + start);
    }
    return random;
  };

  const loadCell = (x, y, workSquares,doubleWord,workWordNo) => {
    let newSquare = {};
    let wordNums = [workWordNo]
    if (doubleWord) {
      wordNums = [workWordNo,workWordNo-1]
    }
    newSquare = {
      letter: wordNums,
      // letter: '',
      locationCol: x + ' / ' + (x + 1),
      locationRow: y + ' / ' + (y + 1),
      wordNums: wordNums,
    };
    workSquares.push(newSquare);
    return workSquares;
  };

  const switchCell = (workSquares) => {
    let savedLetter = workSquares[workSquares.length - 2].letter
    let savedWordNums = workSquares[workSquares.length - 2].wordNums
    workSquares[workSquares.length - 2].letter = workSquares[workSquares.length - 1].letter
    workSquares[workSquares.length - 2].wordNums = workSquares[workSquares.length - 1].wordNums
    workSquares[workSquares.length - 1].letter = savedLetter
    workSquares[workSquares.length - 1].wordNums = savedWordNums
    return workSquares;
  };

  const editInput = e => {
    const value = e.target.value.replace(/[^0-9]/gi, '');
    if (value > 20) return;
    setNumberSelected(value);
  };

  function handleCheckboxChange(lth) {
    let newWordLengths = [...wordLengths];
    if (wordLengths.filter(item => item === lth).length > 0) {
      newWordLengths = wordLengths.filter(item => item !== lth);
    } else {
      newWordLengths.push(lth);
    }
    setWordLengths(newWordLengths);
  }

  const loadBoard = () => {
    let posY = 1;
    let workWordNo = wordNo;
    let posX = 1;
    let alignment = 'row';
    let randomNumber
    let workSquares = JSON.parse(JSON.stringify(squares));
    // outer loop runs through selected word lengths
    for (let i = 0; i < wordLengths.length; i++) {
      // check to see if you have made the largest board possible yet
      if (alignment === "row" && (posX + wordLengths[i]) > 9) {
        break
      } else if (alignment === "column" && (posY + wordLengths[i]) > 9) {
        break
      }
      // inner loop processes each letter in a word
      //  1st see if next word is going to be offset from end of last word
      randomNumber = getRandonNumber(1, 2)
      let doubleWord = false;
      for (let x = 1; x < wordLengths[i]; x++) {
        // check if letter is used in 2 words
          if ((x === 1 && i !== 0) || (x === 1 && posX !== 1)){
            doubleWord = true;
          } else {
            doubleWord = false;
          }

        workSquares = loadCell(posX, posY, workSquares,doubleWord,workWordNo);
        if (alignment === 'row') {
          posX++;
        } else {
          posY++;
        }
        // randomly adjust if you build the next word on the current word's last or 2nd last letter
        //      row/1st letter of new word is last letter of previous/ 4 or 5 letter word/not 1st word
        if (alignment === 'row' && x === 1 && wordLengths[i] > 3 && i > 0) {
          if (randomNumber === 1) {
            posY--;
            workSquares = switchCell(workSquares);
          }
        } else if (alignment === 'column' && x === 1 && wordLengths[i] > 3 && i > 0) {
          if (randomNumber === 1) {
            posX--;
            workSquares = switchCell(workSquares);
          }
        }
      }
      // switch direction of next word
      if (alignment === 'row') {
        alignment = 'column';
      } else {
        alignment = 'row';
      }
      // if room still exists for another word, start processing word lengths at the beginning
      if (alignment === "row" && (posX + wordLengths[0]) < 9 && i+1 === wordLengths.length) {
        i = -1
      } else if (alignment === "column" && (posY + wordLengths[0]) < 9  && i+1 === wordLengths.length) {
        i = -1
      }
      // increment word counter
      workWordNo++
    }
    workWordNo--
    let doubleWord = false;
    workSquares = loadCell(posX, posY, workSquares,doubleWord,workWordNo);
    setWordNo(workWordNo)
    return workSquares;
  };

  const saveClicked = () => {
    setSelectNumber(true);
    let workSquares = loadBoard();
    setSquares(workSquares);
  };

  return (
    <>
      <div className="inputdev">
        <input
          required
          name="value"
          className="selected"
          type="text"
          value={numberSelected}
          maxLength="2"
          onChange={editInput}
        />
        <button className="done" onClick={() => saveClicked()}>
          Save
        </button>
      </div>
      <div>
        <form>
          {lengthList.map(lth => (
            <div key={lth}>
              <input
                type="checkbox"
                name="select"
                key="{lth}"
                checked={wordLengths.filter(item => item === lth).length > 0 ? 'checked' : ''}
                value={lengthList.filter(item => item === lth)}
                onChange={() => handleCheckboxChange(lth)}
              />
              <label className="modal-label">{lth + ' letter word'}</label>
            </div>
          ))}
        </form>
      </div>
      <p>(Enter a number betwen 1 and 20 and select the word sizes you want.)</p>
    </>
  );
};

export default SelectNumber;
