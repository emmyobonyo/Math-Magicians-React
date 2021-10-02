import React from 'react';

function calculator(props) {
  return (
    <div className="calculator">
      <div className="calculator-screen">
        <p className="calculator-digits">{`${props.total} ${props.operation} ${props.next}`}</p>
      </div>
      <div className="calculator-buttons">
        <button className="calculator-button" type="button" onClick={props.onClickHandler}>AC</button>
        <button className="calculator-button" type="button" onClick={props.onClickHandler}>+/-</button>
        <button className="calculator-button" type="button" onClick={props.onClickHandler}>%</button>
        <button className="calculator-button orange-button" type="button" onClick={props.onClickHandler}>/</button>
        <button className="calculator-button" type="button" onClick={props.onClickHandler}>7</button>
        <button className="calculator-button" type="button" onClick={props.onClickHandler}>8</button>
        <button className="calculator-button" type="button" onClick={props.onClickHandler}>9</button>
        <button className="calculator-button orange-button" type="button" onClick={props.onClickHandler}>x</button>
        <button className="calculator-button" type="button" onClick={props.onClickHandler}>4</button>
        <button className="calculator-button" type="button" onClick={props.onClickHandler}>5</button>
        <button className="calculator-button" type="button" onClick={props.onClickHandler}>6</button>
        <button className="calculator-button orange-button" type="button" onClick={props.onClickHandler}>-</button>
        <button className="calculator-button" type="button" onClick={props.onClickHandler}>1</button>
        <button className="calculator-button" type="button" onClick={props.onClickHandler}>2</button>
        <button className="calculator-button" type="button" onClick={props.onClickHandler}>3</button>
        <button className="calculator-button orange-button" type="button" onClick={props.onClickHandler}>+</button>
      </div>
      <div className="calculator-buttons-bottom">
        <button className="calculator-button-bottom button-one" type="button" onClick={props.onClickHandler}>0</button>
        <button className="calculator-button-bottom button-two" type="button" onClick={props.onClickHandler}>.</button>
        <button className="calculator-button-bottom button-three orange-button-bottom" type="button" onClick={props.onClickHandler}>=</button>
      </div>
    </div>
  );
}

export default calculator;
