import React from 'react';
import './CatagoryPage.css'
import ProductCatagory from '../ProductCatagory/ProductCatagory';
import Deals from '../DayOfDeals/Deals';
import RelatedProduct from '../RelatedProduct/RelatedProduct';

const CatagoryPage = () => {
    return (
        <div className="catagory_page_container">
            <div className="container_fluid">
                <ProductCatagory></ProductCatagory>
                <div className="catagory_related_product">
                    <RelatedProduct></RelatedProduct>
                </div>
                <div className="deals_page_section">
                    <Deals></Deals>
                </div>
            </div>
        </div>
    );
};

export default CatagoryPage;