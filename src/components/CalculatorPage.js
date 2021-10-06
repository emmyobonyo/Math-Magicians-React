import React from 'react';
import Calculator from './calculator';

function CalculatorPage() {
  return (
    <div className="calculator-page">
      <div>
        <h2 className="calculator-page-heading">Let us do some Math</h2>
        <p>These are the calculations that you can perform</p>
        <ul className="calculator-links">
          <li className="calculator-links-li">
            <b>Addition: </b>
            Adding items together.
          </li>
          <li className="calculator-links-li">
            <b>Subtraction: </b>
            Subtracting things together.
          </li>
          <li className="calculator-links-li">
            <b>Multiplication: </b>
            Multiplying things together.
          </li>
          <li className="calculator-links-li">
            <b>Division: </b>
            Divide things togther.
          </li>
          <li className="calculator-links-li">
            <b>Modulus: </b>
            Multiply things together.
          </li>
        </ul>
      </div>
      <Calculator />
    </div>
  );
}

export default CalculatorPage;
