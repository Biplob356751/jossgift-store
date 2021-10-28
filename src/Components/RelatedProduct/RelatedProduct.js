import React, { useContext, useEffect, useState } from 'react';
import './RelatedProduct.css'
import ProductData from '../Product/ProductData/ProductData.json';
import { Link } from 'react-router-dom';
import { CartContext, FavContext } from '../../App';

const RelatedProduct = () => {
    const [relatedProduct, setRelatedProduct] = useState([]);
    useEffect(() =>{
        setRelatedProduct(ProductData);
    },[]);

    //add the related product
    const [addCart, setAddCart] = useContext(CartContext);
    const handleRelatedProduct = (related) => {
        const newCart = [...addCart, related];
        setAddCart(newCart);
    };
    //addFavourate product
    const [addFavourate, setFavourate] = useContext(FavContext);
    const handleFavProductsItems = (related) => {
        const newfav = [...addFavourate, related];
        setFavourate(newfav);
    }

    return (
        <div className="related_product_section">
            <h3>Related Products</h3>
            <div className="sell_item_content">
                {
                    relatedProduct.slice(0, 10).map(related =>
                        <div className="best_sell" key={related.key}>
                            <img src={related.image} alt="image" />
                            <h5>{related.productname}</h5>
                            <div className="best_favourate_product">
                                <i onClick={() => handleFavProductsItems(related)} className="fa fa-heart"></i>
                            </div>
                            <div>
                                <del>{related.price}$</del>
                                <span>{related.price - related.discount/ 100 * related.price}$</span>
                            </div>
                            <p>{related.discount}%</p>
                            <div className="sell_ratings">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <small>({related.ratings})</small>
                            </div>
                            <div className="best_sell_btn">
                                <button onClick={() => handleRelatedProduct(related)}>Cart</button>
                                <button><Link to={`/details/${related.key}`}>Details</Link></button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default RelatedProduct;