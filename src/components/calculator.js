import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      total,
      next,
      operation,
      onClickHandler,
    } = this.props;
    return (
      <div className="calculator">
        <div className="calculator-screen">
          <p className="calculator-digits">{`${total} ${next} ${operation}`}</p>
        </div>
        <div className="calculator-buttons">
          <button className="calculator-button" type="button" onClick={onClickHandler}>AC</button>
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
}
