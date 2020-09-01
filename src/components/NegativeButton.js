import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const NegativeButton = () => {
  const { handleChangeTheNumberSign } = useContext(NumberContext);
  return (
    <button type="button" className="gray-button" onClick={handleChangeTheNumberSign.bind(null)}>{'\u00b1'}</button>
  );
};

export default NegativeButton;
