import React, { useState } from 'react';
import Calculator from './components/calculator';
import './App.css';
import calculate from './logic/calculate';

function App() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleEvent = (e) => {
    setState({ ...state, ...calculate(state, e.target.innerHTML) });
  };

  const { total, next, operation } = state;

  return (
    <div>
      <Calculator
        total={total !== null ? total : ''}
        next={next !== null ? next : ''}
        operation={operation !== null ? operation : ''}
        onClickHandler={handleEvent}
      />
    </div>
  );
}

export default App;
