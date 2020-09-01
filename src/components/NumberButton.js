import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const NumberButton = ({ buttonValue }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <div>
      <button type="button" onClick={() => handleSetDisplayValue(buttonValue)}>{buttonValue}</button>
    </div>
  );
};

export default NumberButton;
