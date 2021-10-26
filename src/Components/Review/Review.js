import React from 'react';
import './Review.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 5000
    };
    const reviewData = [
        {
            image: "https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg",
            name: "Asif Sikhder",
            id: "slider1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quam praesentium quaerat ea maiores delectus odit provident non, accusamus veniam!"
        },
        {
            image: "https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg",
            name: "Abdullah Al Habib",
            id: "slider2",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quam praesentium quaerat ea maiores delectus odit provident non, accusamus veniam!"
        },
        {
            image: "https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg",
            name: "Jhon Smith",
            id: "slider3",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quam praesentium quaerat ea maiores delectus odit provident non, accusamus veniam!"
        },
        {
            image: "https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg",
            name: "Kamrul Hasan",
            id: "slider4",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quam praesentium quaerat ea maiores delectus odit provident non, accusamus veniam!"
        },
        {
            image: "https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg",
            name: "Jhon Shina",
            id: "slider5",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quam praesentium quaerat ea maiores delectus odit provident non, accusamus veniam!"
        }

    ];
    return (
        <div className="user_review_page">
            <h3>Customar Review</h3>
            <div className="review_slider">
                <Slider {...settings}>
                    {
                        reviewData.map(review =>
                            <div className="review_slider_content" key={review.id}>
                                <div className="review_slider_item">
                                    <img src={review.image} alt="" />
                                    <div className="review_slider_img_content">
                                        <h2>{review.name}</h2>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <p>{review.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Review;