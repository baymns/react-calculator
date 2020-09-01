import React, { useContext } from 'react';
import { DisplayStyles } from './styles/Styles';
import { NumberContext } from './NumberProvider';

const Display = () => {
  const { number, storedNumber, functionType } = useContext(NumberContext);
  // console.log('number:', number, 'store:', storedNumber);
  return (
    <DisplayStyles>
      <h2 className={storedNumber && storedNumber.length > 12 ? 'long-main-display' : undefined}>
        {number || storedNumber}
      </h2>
      <p>
        {!storedNumber ? 'Calculations will be displayed here' : `${storedNumber} ${functionType} ${number}`}
      </p>
    </DisplayStyles>
  );
};

export default Display;
