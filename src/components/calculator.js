import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const onClickHandler = (e) => {
    setState({ ...state, ...calculate(state, e.target.innerHTML) });
  };

  const { total, next, operation } = state;

  return (
    <div className="calculator">
      <div className="calculator-screen">
        <p className="calculator-digits">{`${total !== null ? total : ''} ${operation !== null ? operation : ''} ${next !== null ? next : ''}`}</p>
      </div>
      <div className="calculator-buttons">
        <button className="calculator-button" type="button" onClick={onClickHandler} data-testid="ac">AC</button>
        <button className="calculator-button" type="button" onClick={onClickHandler}>+/-</button>
        <button className="calculator-button" type="button" onClick={onClickHandler}>%</button>
        <button className="calculator-button orange-button" type="button" onClick={onClickHandler}>/</button>
        <button className="calculator-button" type="button" onClick={onClickHandler}>7</button>
        <button className="calculator-button" type="button" onClick={onClickHandler}>8</button>
        <button className="calculator-button" type="button" onClick={onClickHandler}>9</button>
        <button className="calculator-button orange-button" type="button" onClick={onClickHandler}>x</button>
        <button className="calculator-button" type="button" onClick={onClickHandler}>4</button>
        <button className="calculator-button" type="button" onClick={onClickHandler}>5</button>
        <button className="calculator-button" type="button" onClick={onClickHandler}>6</button>
        <button className="calculator-button orange-button" type="button" onClick={onClickHandler}>-</button>
        <button className="calculator-button" type="button" onClick={onClickHandler}>1</button>
        <button className="calculator-button" type="button" onClick={onClickHandler}>2</button>
        <button className="calculator-button" type="button" onClick={onClickHandler}>3</button>
        <button className="calculator-button orange-button" type="button" onClick={onClickHandler}>+</button>
      </div>
      <div className="calculator-buttons-bottom">
        <button className="calculator-button-bottom button-one" type="button" onClick={onClickHandler}>0</button>
        <button className="calculator-button-bottom button-two" type="button" onClick={onClickHandler}>.</button>
        <button className="calculator-button-bottom button-three orange-button-bottom" type="button" onClick={onClickHandler}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
