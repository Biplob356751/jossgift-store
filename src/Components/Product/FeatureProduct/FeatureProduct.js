import React, { useContext, useEffect, useState } from 'react';
import './FeatureProduct.css';
import ProductData from '../ProductData/ProductData.json';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../App';

const FeatureProduct = () => {
    const [feature, setFeature] = useState([]);
    useEffect(() => {
        setFeature(ProductData);
    },[]);

    //add feature product product
    const [addCart, setAddCart] = useContext(CartContext);
    const handleFeatureProduct = (fetur) => {
        const newCart = [...addCart, fetur];
        setAddCart(newCart);
    };

    //load product information
    const [featureLoad, setFeatureLoad] = useState(10);
    const handleFeatueLoadproduct = () => {
        setFeatureLoad((preValue) => preValue + 5)
    };
    
    return (
        <div className="feature_product_page">
            <h3>Feature Product</h3>
            <div className="sell_item_content">
                {
                    feature.slice(0, featureLoad).map(fetur =>
                        <div className="best_sell" key={fetur.key}>
                            <img src={fetur.image} alt="image" />
                            <h5>{fetur.productname}</h5>
                            <div className="best_favourate_product">
                                <i className="fa fa-heart"></i>
                            </div>
                            <div>
                                <del>{fetur.price}$</del>
                                <span>{fetur.price - fetur.discount / 100 * fetur.price}$</span>
                            </div>
                            <p>{fetur.discount}%</p>
                            <div className="sell_ratings">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <small>({fetur.ratings})</small>
                            </div>
                            <div className="best_sell_btn">
                                <button onClick={() => handleFeatureProduct(fetur)}>Cart</button>
                                <button><Link to={`/details/${fetur.key}`}>Details</Link></button>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="load_more_button">
                <button onClick={handleFeatueLoadproduct}>Load More</button>
            </div>
        </div>
    );
};

export default FeatureProduct;