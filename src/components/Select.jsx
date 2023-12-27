import React from 'react';

const SelectNumber = ({ numberSelected, setNumberSelected, setSelectNumber }) => {
  let value = 0;

  const editInput = e => {
    value = e.target.value.replace(/[^0-9]/gi, '');
    if (value > 20) {value = ''}
    setNumberSelected(value);
    //setSelectNumber(true)
  };

  const doneClicked = e => {
    setSelectNumber(true)
  };

  return (
    <>
      <div className="selected">
        <input
          required
          name="value"
          className="selected"
          type="text"
          value={numberSelected}
          maxLength="2"
          onChange={editInput}
        />
        <button onClick={() => doneClicked()}>Done</button>
      </div>
      <p>Enter a number betwen 1 and 20.</p>
    </>
  );
};

export default SelectNumber;
