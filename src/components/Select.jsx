import React from 'react';

const SelectNumber = ({ numberSelected, setNumberSelected, setSelectNumber }) => {

  const editInput = e => {
    const value = e.target.value.replace(/[^0-9]/gi, '');
    if (value > 20) return
    setNumberSelected(value);
  };

  const doneClicked = e => {
    setSelectNumber(true)
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
        <button className="done" onClick={() => doneClicked()}>Done</button>
      </div>
      <p>(Enter a number betwen 1 and 20.)</p>
    </>
  );
};

export default SelectNumber;
