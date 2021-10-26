import React, { useEffect, useState } from 'react';
import './PacageProduct.css';
import PacageData from '../PacageData/PacageData.json';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import RelatedProduct from '../../RelatedProduct/RelatedProduct';

const PacageProduct = () => {
    const { id } = useParams();
    const [pacageProduct, setPacageProduct] = useState([]);

    useEffect(() => {
        for (let i = 0; i < PacageData.length; i++) {
            if (PacageData[i].id == id) {
                setPacageProduct(PacageData[i].pacageItem);
            }

        }
    }, [id]);

    //add to cart list
    const [addGift, setAddGift] = useState([]);
    const addPackage = (prd) => {
        const newGift = [...addGift, prd]
        setAddGift(newGift);
    };
    //remove product package
    const removeGift = (key) => {
        const newGif = addGift.filter(gf => gf.key !== key);
        setAddGift(newGif);
    }

    //total price 
    const totalGiftPrice = addGift.reduce((sum, gftt) => sum + gftt.price-gftt.discount/100*gftt.price,0);

    //load more data 
    const [visible, setVisible] = useState(5);
    const showMore = () =>{
        setVisible((preValue) => preValue + 5)
    }
    return (
        <div className="pacage_product_section">
            <div className="container_fluid">
                <div className="add_pacage_product">
                    <h3>Total Add Product: {addGift.length}</h3>
                    <div className="add_gift_product_list">
                        {
                            addGift.map(gft =>
                             <div className="add_gift_product_list_item">
                                 <img src={gft.img} alt="" />
                                 <h5>{gft.name}</h5>
                                 <p>{gft.price - gft.discount/100*gft.price} $</p>
                                 <i onClick={() => removeGift(gft.key)} className="fa fa-times"></i>
                            </div>
                            )
                        }
                    </div>
                    <div className="pacage_product_total_price">
                        <h4>Total Price:</h4>
                        <hr />
                        <p> Total price: {totalGiftPrice}$</p>
                        <Link to="/checkout">Checkout</Link>
                    </div>
                </div>
                <div className="pacage_search_product">
                    <input type="search" placeholder="Search Pacage Product.." />
                    <i className="fa fa-search"></i>
                </div>
                <div className="pacage_product">
                    {
                        pacageProduct.slice(0, visible).map(prd =>
                            <div className="pacage_product_item" key={prd.key}>
                                <img src={prd.img} alt="image" />
                                <h5>{prd.name}</h5>
                                <del>{prd.price}$</del>
                                <span>{prd.price - prd.discount / 100 * prd.price}$</span>
                                <p>{prd.discount}%</p>
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <small>({prd.rating})</small>
                                </div>
                                <div className="pacage_product_btn">
                                    <button onClick={() => addPackage(prd)}>Cart</button>
                                    <button><Link to={`/pacageDetails/${prd.key}`}>Details</Link></button>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="load_btn">
                    <button onClick={showMore}>Load More</button>
                </div>

                <RelatedProduct></RelatedProduct>
            </div>
        </div>
    );
};

export default PacageProduct;