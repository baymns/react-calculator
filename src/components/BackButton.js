import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const BackButton = () => {
  const { number, handleDeleteLastNum } = useContext(NumberContext);
  return (
    <button type="button" className="gray-button" onClick={handleDeleteLastNum.bind(null, number)}>
      &#8592;
    </button>
  );
};

export default BackButton;
