import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const FunctionButton = ({ type }) => {
  const { handleFunctionType } = useContext(NumberContext);
  return (
    <button type="button" className="function-button" onClick={handleFunctionType.bind(null, type)}>{type}
    </button>
  );
};

export default FunctionButton;
