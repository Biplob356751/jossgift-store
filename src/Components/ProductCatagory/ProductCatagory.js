import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCatagory.css';
import ProductCatagorydata from './ProductCatagoryData/ProductCatagoryData.json'

const ProductCatagory = () => {
    const [catagory, setCatagory] = useState([]);

    useEffect(() => {
        setCatagory(ProductCatagorydata)
    }, [])
    return (
        <div className="product_catagory">
            <h3>Product Catagroy</h3>
            <div className="container">
                <div className="product_catagory_content">
                    {
                        catagory.map(cat =>
                            <Link to={`/catagory/${cat.catagoryname}`}>
                                <div className="catagory_item" key={cat.id}>
                                    <span>{cat.catagoryname}</span>
                                    <img src={cat.img} alt="" />
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCatagory;