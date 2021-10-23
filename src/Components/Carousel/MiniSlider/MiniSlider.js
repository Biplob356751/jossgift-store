import React from 'react';
import './MiniSlider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MiniSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div className="mini_slider">
            <Slider {...settings}>
                <div className="mini_slider_img">
                    <img src="https://www.oberlo.com/media/1603954924-image20-1.jpg?w=1824&fit=max" alt="" />
                </div>
                <div className="mini_slider_img">
                    <img src="https://i.ytimg.com/vi/g1_N40l_S6s/maxresdefault.jpg" alt="" />
                </div>
                <div className="mini_slider_img">
                    <img src="https://cdn.clippingpath.in/wp-content/uploads/2020/03/Remove-Background-From-a-shoe-Image-1.jpg" alt="" />
                </div>
                <div className="mini_slider_img">
                    <img src="https://cdn.clippingpath.in/wp-content/uploads/2020/03/Original-Image.jpg" alt="" />
                </div>
                <div className="mini_slider_img">
                    <img src="https://micoedward.com/wp-content/uploads/2018/04/Love-your-product.png" alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default MiniSlider;