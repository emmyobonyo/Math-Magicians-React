import React from 'react';
import Calculator from './components/calculator';
import './App.css';
import calculate from './logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent = (e) => {
    const obj = calculate(this.state, e.target.innerHTML);
    this.setState(obj);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <Calculator
          total={total !== null ? total : ''}
          next={next !== null ? next : ''}
          operation={operation !== null ? operation : ''}
          onClickHandler={this.handleEvent}
        />
      </div>
    );
  }
}

export default App;
