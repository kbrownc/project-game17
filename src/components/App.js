import React, { useState } from 'react';
import SelectNumber from './Select';
import Board from './Board';

function App() {
  const [selectNumber, setSelectNumber] = useState(false);
  const [numberSelected, setNumberSelected] = useState(null);
  const squares = [1, 2, 3];

  const restart = () => {};

  const handleClick = () => {};

  return (
    <>
      <h1>Game17</h1>
      {!selectNumber ? (
        <SelectNumber numberSelected={numberSelected} setNumberSelected={setNumberSelected}
        setSelectNumber={setSelectNumber} />
      ) : (
        <Board squares={squares} onClick={handleClick} />
      )}
      <div className="info-wrapper">
        <button onClick={() => restart()}>Restart</button>
        <div>{numberSelected}</div>
      </div>
    </>
  );
}

export default App;
