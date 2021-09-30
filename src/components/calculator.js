import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total, calculate } = this.props;
    return (
      <div className="calculator">
        <div className="calculator-screen">
          <p className="calculator-digits">{total}</p>
        </div>
        <div className="calculator-buttons">
          <button className="calculator-button" type="button" onClick={calculate}>AC</button>
          <button className="calculator-button" type="button" onClick={calculate}>+/-</button>
          <button className="calculator-button" type="button" onClick={calculate}>%</button>
          <button className="calculator-button orange-button" type="button" onClick={calculate}>&#247;</button>
          <button className="calculator-button" type="button" onClick={calculate}>7</button>
          <button className="calculator-button" type="button" onClick={calculate}>8</button>
          <button className="calculator-button" type="button" onClick={calculate}>9</button>
          <button className="calculator-button orange-button" type="button" onClick={calculate}>&times;</button>
          <button className="calculator-button" type="button" onClick={calculate}>4</button>
          <button className="calculator-button" type="button" onClick={calculate}>5</button>
          <button className="calculator-button" type="button" onClick={calculate}>6</button>
          <button className="calculator-button orange-button" type="button" onClick={calculate}>&#8722;</button>
          <button className="calculator-button" type="button" onClick={calculate}>1</button>
          <button className="calculator-button" type="button" onClick={calculate}>2</button>
          <button className="calculator-button" type="button" onClick={calculate}>3</button>
          <button className="calculator-button orange-button" type="button" onClick={calculate}>+</button>
        </div>
        <div className="calculator-buttons-bottom">
          <button className="calculator-button-bottom button-one" type="button" onClick={calculate}>0</button>
          <button className="calculator-button-bottom button-two" type="button" onClick={calculate}>.</button>
          <button className="calculator-button-bottom button-three orange-button-bottom" type="button" onClick={calculate}>=</button>
        </div>
      </div>
    );
  }
}
