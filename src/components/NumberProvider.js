import React, { useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
  const [number, setNumber] = useState('0');
  const [storedNumber, setStoredNumber] = useState('');
  const [functionType, setFunctionType] = useState('');
  const handleSetDisplayValue = (num) => {
    if (!number.length && num === 0) {
      setNumber(`${`${num}`.replace(/^0+/, '0')}`);
    }
    if (number === '0') {
      if (num === '.') {
        setNumber(number + num);
      } else {
        setNumber(`${num}`);
      }
    } else {
      setNumber(number + num);
    }
  };
  const handleStoredValue = () => {
    setStoredNumber(number);
    setNumber('');
  };
  const handleFunctionType = (type) => {
    if (number) {
      setFunctionType(type);
      handleStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };
  const handleClearValue = () => {
    setNumber('0');
    setStoredNumber('');
    setFunctionType('');
  };
  const handleDeleteLastNum = (num) => {
    if (num.length === 1) {
      setNumber('0');
    } else {
      const displayValue = num.slice(0, num.length - 1);
      setNumber(displayValue);
    }
  };
  const handleChangeTheNumberSign = () => {
    if (number) {
      if (number > 0) {
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        setNumber(positiveNumber);
      }
    } else if (storedNumber > 0) {
      setStoredNumber(`-${storedNumber}`);
    } else {
      const positiveNumber = String(storedNumber).slice(1);
      setStoredNumber(positiveNumber);
    }
  };
  const doMath = () => {
    if (number && storedNumber) {
      switch (functionType) {
        case '+':
          setStoredNumber(Math.round((parseFloat(number) + parseFloat(storedNumber)) * 1000) / 1000);
          break;
        case '-':
          setStoredNumber(Math.round((parseFloat(storedNumber) - parseFloat(number)) * 1000) / 1000);
          break;
        case '*':
          setStoredNumber(Math.round((parseFloat(number) * parseFloat(storedNumber)) * 1000) / 1000);
          break;
        case '/':
          setStoredNumber(Math.round((parseFloat(storedNumber) / parseFloat(number)) * 1000) / 1000);
          break;
        default:
          break;
      }
      setNumber('');
    }
  };

  return (
    <NumberContext.Provider value={{
      number,
      storedNumber,
      functionType,
      handleSetDisplayValue,
      handleStoredValue,
      handleClearValue,
      handleDeleteLastNum,
      handleChangeTheNumberSign,
      handleFunctionType,
      doMath,
    }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
