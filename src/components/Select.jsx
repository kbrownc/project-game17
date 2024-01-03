//import React from 'react';
import React from 'react';

const SelectNumber = ({
  numberSelected,
  setNumberSelected,
  setSelectNumber,
  wordLengths,
  setWordLengths,
}) => {

  const lengthList = [2,3,4,5];

  const editInput = e => {
    const value = e.target.value.replace(/[^0-9]/gi, '');
    if (value > 20) return;
    setNumberSelected(value);
  };

  function handleCheckboxChange(lth) {
    let newWordLengths = [...wordLengths]
    if (wordLengths.filter(item => item === lth).length > 0) {
      newWordLengths = wordLengths.filter(item => item !== lth)
    } else {
      newWordLengths.push(lth)
    }
    setWordLengths(newWordLengths)
  }

  const doneClicked = e => {
    setSelectNumber(true);
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
        <button className="done" onClick={() => doneClicked()}>
          Done
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
                  checked={ wordLengths.filter(item => item === lth).length > 0 ? 'checked' : ''}
                  value={lengthList.filter(item => item === lth) }
                  onChange={() => handleCheckboxChange(lth)}
                />
                <label className="modal-label">
                  {lth + ' letter word'}
                </label>
              </div>
            ))}
          </form>
        </div>
      <p>(Enter a number betwen 1 and 20 and select the word sizes you want.)</p>
    </>
  );
};

export default SelectNumber;
