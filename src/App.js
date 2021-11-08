import React, { createContext, useEffect, useState } from 'react';
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
import AddFavourate from './Components/AddFavourate/AddFavourate';
import Contact from './Components/Contact/Contact';
import Signup from './Components/SignUp/Signup';
import Dashboard from './Components/Dashboard/Dashboard';
import Checkout from './Components/Checkout/Checkout';

//context api
export const CartContext = createContext();
export const FavContext = createContext();

const App = () => {

  //localstorage addProduct
  const getProduct = () => {
    const list = localStorage.getItem("myList");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  }

  //localstorage addFavourate product list
  const getFavourateProduct = () => {
    const Favlist = localStorage.getItem("myFavList");
    if (Favlist) {
      return JSON.parse(Favlist);
    } else {
      return [];
    }
  }

  //context api value
  const [addCart, setAddCart] = useState(getProduct());
  const [addFavourate, setAddFavourate] = useState(getFavourateProduct());

  //localstorage addProduct
  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(addCart));
  }, [addCart]);

  //localstorage  addFavourate Products
  useEffect(() => {
    localStorage.setItem("myFavList", JSON.stringify(addFavourate));
  }, [addFavourate]);

  return (
    <div>
      <CartContext.Provider value={[addCart, setAddCart]}>
        <FavContext.Provider value={[addFavourate, setAddFavourate]}>
          <Router>
            <Nav></Nav>
            <Switch>
              <Route path="/" exact>
                <Shop></Shop>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="/signup">
                <Signup></Signup>
              </Route>
              <Route path="/dashboard">
                <Dashboard></Dashboard>
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
              <Route path="/checkout">
                 <Checkout></Checkout>
              </Route>
              <Route path="/addToFavourate">
                <AddFavourate></AddFavourate>
              </Route>
              <Route path="/productdetails/:key">
                <ProductDetails></ProductDetails>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </FavContext.Provider>
      </CartContext.Provider>
    </div>
  );
};

export default App;