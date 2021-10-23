import React from 'react';
import './Brand.css';

const Brand = () => {
    const brandData = [
        { img: "https://www.logo.wine/a/logo/Coca-Cola/Coca-Cola-Logo.wine.svg", id: "brand1" },
        { img: "https://i.pinimg.com/originals/86/21/f4/8621f4ef2ef8494ac7e979a177abd765.png", id: "brand2" },
        { img: "https://d1wobvyg76ybs0.cloudfront.net/sgk-brandimage-prod/assets/brandimage/brand-logo.png", id: "brand3" },
        { img: "https://ssl.com.bd/sites/default/files/Brand%20Logo.png", id: "brand4" },
        { img: "https://www.jekesa.net/wp-content/uploads/2018/09/DELETE_Gucci-Logo-wordmark-1024x768-2.png", id: "brand5" },
        { img: "https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg", id: "brand6" }


    ];
    return (
        <div className="brand_product_img">
            <h3>Product Brand</h3>
            <div className="brand">
                {
                    brandData.map(brand =>
                        <div className="product_brand_img_item" key={brand.id}>
                            <img src={brand.img} alt="" />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Brand;