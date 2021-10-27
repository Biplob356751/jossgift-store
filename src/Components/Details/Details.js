import React, { useContext, useEffect, useState } from 'react';
import './Details.css';
import Productdata from '../Product/ProductData/ProductData.json';
import { useParams } from 'react-router';
import { CartContext } from '../../App';
import RelatedProduct from './../RelatedProduct/RelatedProduct';


const Details = () => {
    const { key } = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {
        for (let i = 0; i < Productdata.length; i++) {
            if (Productdata[i].key == key) {
                setDetails(Productdata[i])
            }
        }
    }, [key]);


    //add product
    const [addCart, setAddCart] = useContext(CartContext);
    const handleAddToCartButton = (details) => {
        const newCart = [...addCart, details];
        setAddCart(newCart);
    }

    return (
        <div className="details_page">
            <div className="container_fluid">
                <div className="product_details_content_container">
                    <div className="multi_image_section">
                        <div className="details_content_image">
                            <img src={details.image} alt="" />
                        </div>
                    </div>
                    <div className="details_content_content_info">
                        <h2>Product Name: <span>{details.productname}</span></h2>
                        <h2>Product Price: <span>{details.price - details.discount / 100 * details.price}$</span></h2>
                        <div className="details_ratings">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fas fa-star-half-alt"></i><span>({details.ratings})</span>
                        </div>
                        <button onClick={() => handleAddToCartButton(details)}>Add To Cart</button>
                        <p>{details.description}</p>
                    </div>
                </div>

                <RelatedProduct></RelatedProduct>
            </div>
        </div>
    );
};

export default Details;