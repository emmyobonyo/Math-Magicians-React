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
          <div className="calculator-button">AC</div>
          <div className="calculator-button">+/-</div>
          <div className="calculator-button">%</div>
          <div className="calculator-button orange-button">&#247;</div>
          <div className="calculator-button">7</div>
          <div className="calculator-button">8</div>
          <div className="calculator-button">9</div>
          <div className="calculator-button orange-button">&times;</div>
          <div className="calculator-button">4</div>
          <div className="calculator-button">5</div>
          <div className="calculator-button">6</div>
          <div className="calculator-button orange-button">&#8722;</div>
          <div className="calculator-button">1</div>
          <div className="calculator-button">2</div>
          <div className="calculator-button">3</div>
          <div className="calculator-button orange-button">+</div>
        </div>
        <div className="calculator-buttons-bottom">
          <div className="calculator-button-bottom button-one">0</div>
          <div className="calculator-button-bottom button-two">.</div>
          <div className="calculator-button-bottom button-three orange-button-bottom">=</div>
        </div>
      </div>
    );
  }
}
