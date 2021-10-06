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
        <nav className="navigation">
          <h3 className="logo">
            <Link to="/">Math Magicians</Link>
          </h3>
          <ul className="navigation-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="link-borders">
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/quote">Quote</Link>
            </li>
          </ul>
        </nav>
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
      </div>
    </Router>
  );
}

export default Navigation;
