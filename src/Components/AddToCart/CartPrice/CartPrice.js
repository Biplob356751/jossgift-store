import React from 'react';
import { Link } from 'react-router-dom';
import './CartPrice.css'

const CartPrice = (props) => {
    const addCart = props.addCart;

    const total = addCart.reduce((sum, pd) => sum + pd.price - pd.discount/100*pd.price,0)

    //shipping
    let shipping = 0;
    if(total > 1000){
        shipping = 50;
    }
    else if(total > 500){
        shipping = 30;
    }
    else if(total > 200){
        shipping = 20
    }
    // vat tax
    let tax = Math.floor(total / 10);
    return (
        <div className="cart_price_section">
            <h1>Product Price</h1>
            <h4>Product Item: <span>{addCart.length}</span></h4>
            <p>Total: <span>{Math.floor(total)}$</span></p>
            <p>Shipping: <span>{shipping}$</span></p>
            <p>Tax + Vat($): <span>{tax}$</span></p>
            <hr />
            <h2>Total: <span>{Math.floor(total + shipping + tax)}$</span></h2>
            <Link to="/checkout">Checkout</Link>
        </div>
    );
};

export default CartPrice;