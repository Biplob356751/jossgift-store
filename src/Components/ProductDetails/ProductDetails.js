import React, { useContext, useEffect, useState } from 'react';
import './ProductDetails.css';
import ProductCatagoryData from '../ProductCatagory/ProductCatagoryData/ProductCatagoryData.json';
import { useParams } from 'react-router';
import { CartContext } from '../../App';
import RelatedProduct from '../RelatedProduct/RelatedProduct';


const ProductDetails = () => {
    document.title = "JossGift || Product Details"

    const { key } = useParams();
    const [catagoryDetails, setCatagoryDetails] = useState([]);

    useEffect(() => {
        for (let i = 0; i < ProductCatagoryData.length; i++) {
            for (let j = 0; j < ProductCatagoryData[i].catagory.length; j++) {
                if (ProductCatagoryData[i].catagory[j].key === key) {
                    setCatagoryDetails(ProductCatagoryData[i].catagory[j])
                }
            }
        }
    }, [key]);

    //addcart 
    const [addCart, setAddCart] = useContext(CartContext);
    const addToCartBtn = (catagoryDetails) => {
        const newCart = [...addCart, catagoryDetails]
        setAddCart(newCart);
    };

    //tab tab_section

    const [tab, setTab] = useState(1);
    const handleTab = (index) =>{
        setTab(index);
    };
    //add comments
    const [comments, setComments] = useState('');
    const handleComments = () =>{
       const comment = document.getElementById('comment').value;
       setComments(comment);
       document.getElementById('comment').value = '';

    };
    //profile info
    const athore = "Md. Biplob Hossain";
    const img = "https://static.vecteezy.com/system/resources/thumbnails/002/204/275/small/a-male-office-worker-raises-his-hand-and-introduces-something-hand-drawn-style-design-illustrations-vector.jpg";

    return (
        <div className="catagory_product_details_page">
            <div className="container_fluid">
                <div className="catagory_details_content">
                    <div className="catagory_details_content_img">
                        <img src={catagoryDetails.image} alt="" />
                    </div>
                    <div className="catagory_details_content_info">
                        <h3>Product Name: <span>{catagoryDetails.productname}</span></h3>
                        <h3>Product Price: <span>{catagoryDetails.price - catagoryDetails.discount / 100 * catagoryDetails.price}$</span></h3>
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

                {/* Tab Section */}
                <div className='tab_section'>
                    <div className="tabs">
                        <div className={tab === 1 ? "tab active_tab" : "tab"} onClick={() => handleTab(1)}>Details</div>
                        <div className={tab === 2 ? "tab active_tab" : "tab"} onClick={() => handleTab(2)}>Review</div>
                        <div className={tab === 3 ? "tab active_tab" : "tab"} onClick={() => handleTab(3)}>Brand</div>
                    </div>
                    <div className="tab_content">
                        <div className={tab === 1 ? "content active_content" : "content"}>
                            <h2>Description:</h2>
                            <p>{catagoryDetails.description}</p>
                        </div>
                        <div className={tab === 2 ? "content active_content" : "content"}>
                            <h5>Comment:</h5>
                            <textarea id="comment"></textarea>
                            <button onClick={handleComments}>Comments</button>
                        </div>
                        <div className={tab === 3 ? "content active_content" : "content"}>
                            <h3>ProductName: <span>{catagoryDetails.productname}</span></h3>
                        </div>
                    </div>
                </div>
                <div className={tab === 2 ? "content active_content" : "content"}>
                    <div className="comments_content container_fluid">
                        <div className="profile_info">
                            <img src={img} alt="" />
                            <h6>{athore}:</h6>
                        </div>
                        <p>{comments}</p>
                    </div>
                </div>

                <RelatedProduct></RelatedProduct>
            </div>
        </div>
    );
};

export default ProductDetails;