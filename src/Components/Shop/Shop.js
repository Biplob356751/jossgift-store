import React from 'react';
import Carousel from '../Carousel/Carousel';
import GiftPacage from '../GiftPacage/GiftPacage';
import Brand from '../ProductBrand/Brand';
import ProductCatagory from '../ProductCatagory/ProductCatagory';
import './Shop.css';
import BestSellToday from './../Product/BestSellToday/BestSellToday';
import NewProduct from '../Product/NewProduct/NewProduct';

const Shop = () => {
    return (
        <div className="shop_page">
            <div className="container_fluid">
                <Carousel></Carousel>
                <div className="brand_section">
                    <Brand></Brand>
                </div>
                <div className="pacage_section">
                    <GiftPacage></GiftPacage>
                </div>
                <div className="catagory_section">
                    <ProductCatagory></ProductCatagory>
                </div>
                <div className="best_sell_today">
                    <BestSellToday></BestSellToday>
                </div>
                <div className="new_product_page">
                    <NewProduct></NewProduct>
                </div>
            </div>
        </div>
    );
};

export default Shop;