import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const EqualButton = () => {
  const { doMath } = useContext(NumberContext);
  return (
    <button type="button" className="function-button" onClick={doMath.bind(null)}>=</button>
  );
};

export default EqualButton;
