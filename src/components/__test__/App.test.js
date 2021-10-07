import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../../App';
import CalculatorPage from '../CalculatorPage';
import Navigation from '../Navigation';
import Home from '../Home';
import Quote from '../Quote';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalculatorPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
  const tree = renderer.create(<CalculatorPage />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navigation />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
  const tree = renderer.create(<Navigation />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Quote />, div);
  ReactDOM.unmountComponentAtNode(div);
});
