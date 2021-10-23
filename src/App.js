import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/NavBar/Nav';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';

const App = () => {
  return (
    <div>
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact>
            <Shop></Shop>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;