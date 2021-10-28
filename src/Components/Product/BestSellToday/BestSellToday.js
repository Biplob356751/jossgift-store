import React, { useContext, useEffect, useState } from 'react';
import './BestSellToday.css';
import ProductData from '../ProductData/ProductData.json';
import { Link } from 'react-router-dom';
import { CartContext, FavContext } from '../../../App';

const BestSellToday = () => {
    const [bestSell, setBestSell] = useState([]);
    useEffect(() => {
        setBestSell(ProductData);
    }, []);

    //addprodct 
    const [addCart, setAddCart] = useContext(CartContext);
    const handleBestProduct = (best) => {
        const newProduct = [...addCart, best];
        setAddCart(newProduct);
    }
    //show more product
    const [moreProduct, setMoreProduct] = useState(10);
    const handleSeeMore = () => {
        setMoreProduct((preValue) => preValue + 5)
    }

    //addFavourate product
    const [addFavourate, setFavourate] = useContext(FavContext);
    const handleFavProduct = (best) => {
        const newfav = [...addFavourate, best];
        setFavourate(newfav);
    }


    return (
        <div className="best_sell_today_content">
            <h3>Best Sell Of Today</h3>
            <div className="sell_item_content">
                {
                    bestSell.slice(0, moreProduct).map(best =>
                        <div className="best_sell" key={best.key}>
                            <img src={best.image} alt="image" />
                            <h5>{best.productname}</h5>
                            <div className="best_favourate_product">
                                <i onClick={() => handleFavProduct(best)} className="fa fa-heart"></i>
                            </div>
                            <div>
                                <del>{best.price}$</del>
                                <span>{best.price - best.discount/ 100 * best.price}$</span>
                            </div>
                            <p>{best.discount}%</p>
                            <div className="sell_ratings">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <small>({best.ratings})</small>
                            </div>
                            <div className="best_sell_btn">
                                <button onClick={() => handleBestProduct(best)}>Cart</button>
                                <button><Link to={`/details/${best.key}`}>Details</Link></button>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className="show_more_btn">
                <button onClick={handleSeeMore}>Load More</button>
            </div>
        </div>
    );
};

export default BestSellToday;