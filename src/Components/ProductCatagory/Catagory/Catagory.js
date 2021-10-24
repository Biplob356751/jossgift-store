import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Catagory.css';
import ProductCatagoryData from '../ProductCatagoryData/ProductCatagoryData.json';
import { Link } from 'react-router-dom';


const Catagory = () => {
    const { catagoryname } = useParams();
    const [catagory, setCatagory] = useState([]);

    useEffect(() => {
        for (let i = 0; i < ProductCatagoryData.length; i++) {
            if (ProductCatagoryData[i].catagoryname == catagoryname) {
                setCatagory(ProductCatagoryData[i].catagory);
            }
        }
    }, [catagoryname]);
    console.log(ProductCatagoryData);
    return (
        <div className="catagory_page">
            <div className="container_fluid">
                <div className="filter_product">
                    <h4>Filter Product</h4>
                    <div className="filter_item_content">
                        <input type="checkbox" /><span>Low Price (200$ - 500$)</span><br />
                        <input type="checkbox" /><span>High Price (700$ - 1000$)</span>
                        <label>Price Range</label>
                        <input type="range" />
                    </div>
                </div>
                <h3>{catagoryname}</h3>
                <div className="product_content_container">
                    {
                        catagory.map(product =>
                            <div className="product_content_item" key={product.key}>
                                <img src={product.image} alt="" />
                                <h5>{product.productname}</h5>
                                <p>{product.discount}%</p>
                                <div className="heart_icon">
                                    <i className="fas fa-heart"></i>
                                </div>
                                <div>
                                    <del>{product.price}$</del>
                                    <span>{product.price - product.discount / 100 * product.price}$</span>
                                </div>
                                <div className="product_ratings">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <span>({product.ratings})</span>
                                </div>
                                <div className="add_to_cart_details_btn">
                                    <button>Cart</button>
                                    <button><Link to="/catagorydetails">Details</Link></button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Catagory;