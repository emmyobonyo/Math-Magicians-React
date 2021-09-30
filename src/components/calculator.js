import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator-screen">
          <p className="calculator-digits">0</p>
        </div>
        <div className="calculator-buttons">
          <button name="AC" className="calculator-button" type="button">AC</button>
          <button name="plus-or-minus" className="calculator-button" type="button">+/-</button>
          <button name="mod" className="calculator-button" type="button">%</button>
          <button name="/" className="calculator-button orange-button" type="button">&#247;</button>
          <button name="7" className="calculator-button" type="button">7</button>
          <button name="8" className="calculator-button" type="button">8</button>
          <button name="9" className="calculator-button" type="button">9</button>
          <button name="*" className="calculator-button orange-button" type="button">&times;</button>
          <button name="4" className="calculator-button" type="button">4</button>
          <button name="5" className="calculator-button" type="button">5</button>
          <button name="6" className="calculator-button" type="button">6</button>
          <button name="-" className="calculator-button orange-button" type="button">&#8722;</button>
          <button name="1" className="calculator-button" type="button">1</button>
          <button name="2" className="calculator-button" type="button">2</button>
          <button name="3" className="calculator-button" type="button">3</button>
          <button name="+" className="calculator-button orange-button" type="button">+</button>
        </div>
        <div className="calculator-buttons-bottom">
          <button name="0" className="calculator-button-bottom button-one" type="button">0</button>
          <button name="." className="calculator-button-bottom button-two" type="button">.</button>
          <button name="=" className="calculator-button-bottom button-three orange-button-bottom" type="button">=</button>
        </div>
      </div>
    );
  }
}
