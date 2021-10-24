import React from 'react';
import './Carousel.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MiniSlider from './MiniSlider/MiniSlider';

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true
    };
    const carouselData = [
        {
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
            title: "A Brand New Camera Nikkon",
            id: "slider1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quam praesentium quaerat ea maiores delectus odit provident non, accusamus veniam!"
        },
        {
            image: "https://thumbs.dreamstime.com/b/studio-shot-running-shoe-red-background-flat-lay-top-view-154196465.jpg",
            title: "A Brand New Camera Nikkon",
            id: "slider2",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quam praesentium quaerat ea maiores delectus odit provident non, accusamus veniam!"
        },
        {
            image: "https://lh3.googleusercontent.com/proxy/O0MFyFzAw7_ZShNIku1UWV8EuQJl-_TIpbavOnqsiJ0W7S_zz0G2lGLJBA3wS7EpufVm_1aLlvTBzwCUYt-sy1M4hr_Crvp1J1DaF-BU3l2GAhyZ6QmjTOFTAEIZCmCFx6GMag",
            title: "A Brand New Camera Nikkon",
            id: "slider3",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quam praesentium quaerat ea maiores delectus odit provident non, accusamus veniam!"
        },
        {
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            title: "A Brand New Camera Nikkon",
            id: "slider4",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quam praesentium quaerat ea maiores delectus odit provident non, accusamus veniam!"
        },
        {
            image: "https://media.istockphoto.com/photos/yellow-headphones-on-yellow-background-music-concept-picture-id1065348312?k=20&m=1065348312&s=170667a&w=0&h=gBecOnLbIclvcr45hIppLOBE-bNku5lTRA9ACPm_Do0=",
            title: "A Brand New Camera Nikkon",
            id: "slider5",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quam praesentium quaerat ea maiores delectus odit provident non, accusamus veniam!"
        }

    ];

    return (
        <div className="carousel_slider">
            <Slider {...settings}>
                {
                    carouselData.map(carousel =>
                        <div className="carousel_content" key={carousel.id}>
                            <div className="carousel_item">
                                <img src={carousel.image} alt="" />
                                <div className="slider_img_content">
                                    <h2>{carousel.title}</h2>
                                    <p>{carousel.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Slider>
            <div className="mini_slider">
                <MiniSlider></MiniSlider>
            </div>
        </div>
    );
};

export default Carousel;