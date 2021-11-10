import React, { useContext } from 'react';
import { CartContext } from '../../App';
import './AddToCart.css'
import CartPrice from './CartPrice/CartPrice';

const AddToCart = () => {
    document.title = "JossGift || AddToCart Product";

    const [addCart, setAddCart] = useContext(CartContext);

    const removeItem = (key) => {
        const newCard = addCart.filter(pd => pd.key !== key);
        setAddCart(newCard);
    }

    //incriment Products
    
    return (
        <div className="add_to_cart_page">
            <div className="container_fluid">
                <div className="catagory_add_cart_section">
                    <div className="add_to_cart">
                        {
                            addCart.map(cart =>
                                <div className="add_to_cart_item" key={cart.key}>
                                    <div className="add_cart_img">
                                        <img src={cart.image} alt="" />
                                    </div>
                                    <h5>{cart.productname}</h5>
                                    <p>{cart.price - cart.discount / 100 * cart.price}$</p>
                                    <div className="quantity_lenght">
                                        <span><i className="fa fa-plus"></i></span>
                                        <span>{cart.quantity}</span>
                                        <span><i className="fa fa-minus"></i></span>
                                    </div>
                                    <div className="remove_icon">
                                        <i onClick={() => removeItem(cart.key)} className="fa fa-times"></i>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="cart_price_section">
                        <CartPrice addCart={addCart}></CartPrice>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;