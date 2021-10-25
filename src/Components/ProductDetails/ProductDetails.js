import React, { useContext, useEffect, useState } from 'react';
import './ProductDetails.css';
import ProductCatagoryData from '../ProductCatagory/ProductCatagoryData/ProductCatagoryData.json';
import { useParams } from 'react-router';
import { CartContext } from '../../App';


const ProductDetails = () => {
    const {key} = useParams();
    const [catagoryDetails, setCatagoryDetails] = useState([]);

    useEffect(() => {
        for (let i = 0; i < ProductCatagoryData.length; i++){
            for (let j = 0; j < ProductCatagoryData[i].catagory.length; j++){
                if(ProductCatagoryData[i].catagory[j].key === key){
                    setCatagoryDetails(ProductCatagoryData[i].catagory[j])
                }
            }
        }
    },[key]);

    //addcart 
    const [addCart, setAddCart] = useContext(CartContext);
    const addToCartBtn = (catagoryDetails) =>{
        const newCart = [...addCart, catagoryDetails]
        setAddCart(newCart);
    }

    return (
        <div className="catagory_product_details_page">
            <div className="container_fluid">
                <div className="catagory_details_content">
                    <div className="catagory_details_content_img">
                        <img src={catagoryDetails.image} alt="" />
                    </div>
                    <div className="catagory_details_content_info">
                        <h3>Product Name: <span>{catagoryDetails.productname}</span></h3>
                        <h3>Product Price: <span>{catagoryDetails.price-catagoryDetails.discount/100*catagoryDetails.price}$</span></h3>
                        <h4>{catagoryDetails.catagory}</h4>
                        <div className="catagory_product_rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <span>({catagoryDetails.ratings})</span>
                        </div>
                        <p>{catagoryDetails.description}</p>
                        <button onClick={() => addToCartBtn(catagoryDetails)}>Add To cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;