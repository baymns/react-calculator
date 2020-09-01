import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const ClearButton = () => {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button type="button" className="gray-button" onClick={handleClearValue.bind(null)}>AC</button>
  );
};

export default ClearButton;
