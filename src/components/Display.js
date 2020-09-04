import React, { useContext } from 'react';
import { DisplayStyles } from './styles/Styles';
import { NumberContext } from './NumberProvider';

const Display = () => {
  const { number, storedNumber, functionType } = useContext(NumberContext);
  return (
    <DisplayStyles>
      <h2 className={storedNumber && storedNumber.length > 18 ? 'long-main-display' : undefined}>
        {!storedNumber ? storedNumber || number : number || storedNumber}
      </h2>
      <p>
        {!storedNumber ? 'Calculations will be displayed here' : `${storedNumber} ${functionType} ${number}`}
      </p>
    </DisplayStyles>
  );
};

export default Display;
