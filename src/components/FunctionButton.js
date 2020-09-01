import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const FunctionButton = ({ type }) => {
  const { handleFunctionType } = useContext(NumberContext);
  // const division = &#247;
  return (
    <button type="button" className="function-button" onClick={handleFunctionType.bind(null, type)}>
      {type === '*' ? '\u00d7' : type === '/' ? '\u00f7' : type }
    </button>
  );
};

export default FunctionButton;
