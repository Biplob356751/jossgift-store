import React, { useContext, useEffect, useState } from 'react';
import './NewProduct.css';
import ProductData from '../ProductData/ProductData.json';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../App';

const NewProduct = () => {
    const [newProduct, setNewProduct] = useState([]);
    useEffect(() => {
        setNewProduct(ProductData);
    }, []);

    //add To cart
    const [addCart, setAddCart] = useContext(CartContext);
    const handleAddCart = (newPrd) => {
        const newCart = [...addCart, newPrd];
        setAddCart(newCart);
    }
    //see more product
    const [more, setMore] = useState(10)
    const handleSeeMoreProduct = () => {
        setMore((preValue) => preValue + 5)
    }
    return (
        <div className="new_product_section">
            <h3>New Product</h3>
            <div className="new_product_content">
                {
                    newProduct.slice(0, more).map(newPrd =>
                        <div className="best_sell" key={newPrd.key}>
                            <img src={newPrd.image} alt="image" />
                            <h5>{newPrd.productname}</h5>
                            <div className="best_favourate_product">
                                <i className="fa fa-heart"></i>
                            </div>
                            <div>
                                <del>{newPrd.price}$</del>
                                <span>{newPrd.price - newPrd.discount/ 100 * newPrd.price}$</span>
                            </div>
                            <p>{newPrd.discount}%</p>
                            <div className="sell_ratings">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <small>({newPrd.ratings})</small>
                            </div>
                            <div className="best_sell_btn">
                                <button onClick={() => handleAddCart(newPrd)}>Cart</button>
                                <button><Link to={`/details/${newPrd.key}`}>Details</Link></button>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="show_more_btn">
                <button onClick={handleSeeMoreProduct}>Load More</button>
            </div>
        </div>
    );
};

export default NewProduct;