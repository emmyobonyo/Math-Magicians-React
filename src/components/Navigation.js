import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Calculator from './calculator';
import Quote from './Quote';
import Home from './Home';

function Navigation() {
  return (
    <Router>
      <div>
        <nav>
          <h3>Math Magicians</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/quote">Quote</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/quote">
              <Quote />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </nav>
      </div>
    </Router>
  );
}

export default Navigation;