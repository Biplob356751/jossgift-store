import React from 'react';
import Carousel from '../Carousel/Carousel';
import Brand from '../ProductBrand/Brand';
import './Shop.css';

const Shop = () => {
    return (
        <div className="shop_page">
            <div className="container_fluid">
                <Carousel></Carousel>
                <div className="brand_section">
                    <Brand></Brand>
                </div>
            </div>
        </div>
    );
};

export default Shop;