import React, { useContext, useEffect, useState } from 'react';
import './Details.css';
import Productdata from '../Product/ProductData/ProductData.json';
import { useParams } from 'react-router';
import { CartContext } from '../../App';
import RelatedProduct from './../RelatedProduct/RelatedProduct';


const Details = () => {
    document.title = "JossGift || Product Details"

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
    const athore = "Md. Biplob Hossain";
    const img = "https://static.vecteezy.com/system/resources/thumbnails/002/204/275/small/a-male-office-worker-raises-his-hand-and-introduces-something-hand-drawn-style-design-illustrations-vector.jpg";

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
                            <p>{details.description}</p>
                        </div>
                        <div className={tab === 2 ? "content active_content" : "content"}>
                            <h5>Comment:</h5>
                            <textarea id="comment"></textarea>
                            <button onClick={handleComments}>Comments</button>
                        </div>
                        <div className={tab === 3 ? "content active_content" : "content"}>
                            <h3>ProductName: <span>{details.productname}</span></h3>
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

export default Details;