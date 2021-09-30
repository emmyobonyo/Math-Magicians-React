import React from 'react';
import Calculator from './components/calculator';
import './App.css';
// import Calculate from './logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0 };
  }

  render() {
    const { total } = this.state;
    return (
      <div>
        <Calculator total={total} />
      </div>
    );
  }
}

export default App;
