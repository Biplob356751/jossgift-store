import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/NavBar/Nav';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import PacageProduct from './Components/GiftPacage/PacageProduct/PacageProduct';
import PacageDetails from './Components/GiftPacage/PacageProductDetails/PacageDetails';
import ProductCatagory from './Components/ProductCatagory/ProductCatagory';
import Catagory from './Components/ProductCatagory/Catagory/Catagory';

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
          <Route path="/pacage/:id">
            <PacageProduct></PacageProduct>
          </Route>
          <Route path="/pacageDetails/:key">
            <PacageDetails></PacageDetails>
          </Route>
          <Route path="/catagory/:catagoryname">
            <Catagory></Catagory>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;