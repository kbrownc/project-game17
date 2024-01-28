import React from 'react';

const SelectNumber = ({
  numberSelected,
  setNumberSelected,
  setSelectNumber,
  wordLengths,
  setWordLengths,
  squares,
  setSquares,
}) => {
  const lengthList = [2, 3, 4, 5];
  let count = 1

  const getRandonNumber = (start, end) => {
    let getRandom = Math.floor(Math.random() * end + start);
    while (getRandom > end) {
      getRandom = Math.floor(Math.random() * end + start);
    }
    return getRandom;
  };

  const loadCell = (x, y, workSquares) => {
    let newSquare = {}
    newSquare = {
      letter: count,
      locationCol: x + ' / ' + (x + 1),
      locationRow: y + ' / ' + (y + 1),
    }
    workSquares.push(newSquare);
    count = count + 1
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

  const saveClicked = () => {
    setSelectNumber(true);
    let posY = 1;
    let posX = 1;
    let alignment = 'row';
    let workSquares = JSON.parse(JSON.stringify(squares));

    for (let i = 0; i < wordLengths.length; i++) {
      for (let x = 1; x < wordLengths[i] ; x++) {             
        workSquares = loadCell(posX, posY, workSquares);
        if (alignment === 'row') {
          posX++
        } else {
          posY++
        }
        console.log('Random', getRandonNumber(2, 5));
        if (alignment === 'row' && x === 1 && wordLengths[i] > 3) {
          console.log('***row',alignment,x,wordLengths[i])
          posY--
        } else if (alignment === 'column' && x === 1 && wordLengths[i] > 3) {
          console.log('***column',alignment,x,wordLengths[i])
          posX--
        }
      }
      if (alignment === 'row') {
        alignment = 'column';
      } else {
        alignment = 'row';
      }
    }
    workSquares = loadCell(posX, posY, workSquares);
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
