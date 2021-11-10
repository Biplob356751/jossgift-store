import React from 'react';
import Carousel from '../Carousel/Carousel';
import GiftPacage from '../GiftPacage/GiftPacage';
import Brand from '../ProductBrand/Brand';
import ProductCatagory from '../ProductCatagory/ProductCatagory';
import './Shop.css';
import BestSellToday from './../Product/BestSellToday/BestSellToday';
import NewProduct from '../Product/NewProduct/NewProduct';
import FeatureProduct from './../Product/FeatureProduct/FeatureProduct';
import Deals from '../DayOfDeals/Deals';
import Review from '../Review/Review';

const Shop = () => {
    document.title = "JossGift || JossGift Shop"

    return (
        <div className="shop_page">
            <div className="container_fluidd">
                <div className="carousel_section">
                    <Carousel></Carousel>
                </div>
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
                <div className="feature_product_section">
                    <FeatureProduct></FeatureProduct>
                </div>
                <div className="day_of_deals_today_section">
                    <Deals></Deals>
                </div>
                <div className="customar_review_section">
                    <Review></Review>
                </div>
            </div>
        </div>
    );
};

export default Shop;