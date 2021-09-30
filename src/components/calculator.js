import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.calculate = this.calculate.bind(this);
    this.state = {};
  }

  calculate({}, e)

  render() {
    const { total } = this.props;
    return (
      <div className="calculator">
        <div className="calculator-screen">
          <p className="calculator-digits">{total}</p>
        </div>
        <div className="calculator-buttons">
          <button className="calculator-button" type="button">AC</button>
          <button className="calculator-button" type="button">+/-</button>
          <button className="calculator-button" type="button">%</button>
          <button className="calculator-button orange-button" type="button">&#247;</button>
          <button className="calculator-button" type="button">7</button>
          <button className="calculator-button" type="button">8</button>
          <button className="calculator-button" type="button">9</button>
          <button className="calculator-button orange-button" type="button">&times;</button>
          <button className="calculator-button" type="button">4</button>
          <button className="calculator-button" type="button">5</button>
          <button className="calculator-button" type="button">6</button>
          <button className="calculator-button orange-button" type="button">&#8722;</button>
          <button className="calculator-button" type="button">1</button>
          <button className="calculator-button" type="button">2</button>
          <button className="calculator-button" type="button">3</button>
          <button className="calculator-button orange-button" type="button">+</button>
        </div>
        <div className="calculator-buttons-bottom">
          <button className="calculator-button-bottom button-one" type="button">0</button>
          <button className="calculator-button-bottom button-two" type="button">.</button>
          <button className="calculator-button-bottom button-three orange-button-bottom" type="button">=</button>
        </div>
      </div>
    );
  }
}
