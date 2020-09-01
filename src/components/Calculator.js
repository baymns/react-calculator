import React from 'react';
import { CalculatorStyles } from './styles/Styles';
import Display from './Display';
import NumberButton from './NumberButton';
import ClearButton from './ClearButton';
import BackButton from './BackButton';
import NegativeButton from './NegativeButton';
import FunctionButton from './FunctionButton';
import EqualButton from './EqualButton';

const Calculator = () => (
  <CalculatorStyles>
    <div className="display">
      <h1>Calculator</h1>
      <Display />
    </div>
    <div className="number-pad">
      <ClearButton />
      <BackButton />
      <NegativeButton />
      <FunctionButton type="/" />
      <NumberButton buttonValue={7} />
      <NumberButton buttonValue={8} />
      <NumberButton buttonValue={9} />
      <FunctionButton type="*" />
      <NumberButton buttonValue={4} />
      <NumberButton buttonValue={5} />
      <NumberButton buttonValue={6} />
      <FunctionButton type="-" />
      <NumberButton buttonValue={1} />
      <NumberButton buttonValue={2} />
      <NumberButton buttonValue={3} />
      <FunctionButton type="+" />
      <div className="zero-button">
        <NumberButton buttonValue={0} />
      </div>
      <NumberButton buttonValue="." />
      <EqualButton />
    </div>
  </CalculatorStyles>
);

export default Calculator;
