import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/NavBar/Nav';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import PacageProduct from './Components/GiftPacage/PacageProduct/PacageProduct';
import PacageDetails from './Components/GiftPacage/PacageProductDetails/PacageDetails';
import Catagory from './Components/ProductCatagory/Catagory/Catagory';
import AddToCart from './Components/AddToCart/AddToCart';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Details from './Components/Details/Details';
import Footer from './Components/Footer/Footer';
import CatagoryPage from './Components/CatagoryPage/CatagoryPage';

export const CartContext = createContext();
const App = () => {
  const [addCart, setAddCart] = useState([]);
  return (
    <div>
      <CartContext.Provider value={[addCart, setAddCart]}>
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
            <Route path='/details/:key'>
              <Details></Details>
            </Route>
            <Route path='/catagorypage'>
              <CatagoryPage></CatagoryPage>
            </Route>
            <Route path="/catagory/:catagoryname">
              <Catagory></Catagory>
            </Route>
            <Route path="/addToCart">
              <AddToCart></AddToCart>
            </Route>
            <Route path="/productdetails/:key">
              <ProductDetails></ProductDetails>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </CartContext.Provider>
    </div>
  );
};

export default App;