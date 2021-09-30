import React from 'react';
import Calculator from './components/calculator';
import './App.css';
import calculate from './logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0 };
  }

  render() {
    const { total } = this.state;
    return (
      <div>
        <Calculator total={total} calculate={calculate} />
      </div>
    );
  }
}

export default App;
