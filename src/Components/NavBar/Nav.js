import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./logo.png";
import './Nav.css';

const Nav = () => {
    return (
        <div className="nav_bar">
            <div className="container_fluid">
                <div className="main_menu_item">
                    <div className="bar_icon">
                        <i className="fa fa-bars"></i>
                        <i id="times_icon" className="fa fa-times"></i>
                    </div>
                    <div className="menu">
                        <nav>
                            <ul>
                                <li><i className="fas fa-store-alt"></i> <Link to="/">Shop</Link></li>
                                <li><i className="fab fa-shopware"></i> <Link to="/about">About Us</Link></li>
                                <li><i className="fas fa-headphones"></i><Link to="/catagory">Catagroy</Link></li>
                                <li><i className="fas fa-blender-phone"></i><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="logo">
                        <Link to="/"><img src={Logo} alt="" /></Link>
                    </div>
                    <div className="serch_bar">
                        <input type="text" placeholder="Search Products..." />
                        <i className="fa fa-search"></i>
                    </div>
                    <div className="fav_icon">
                        <i className="far fa-heart"></i>
                        <div>4</div>
                    </div>
                    <div className="cart_icon">
                        <i className="fas fa-shopping-cart"></i>
                        <div>5</div>
                    </div>
                    <div className="signup_btn">
                        <Link to="/signup">SignUp</Link>
                    </div>
                    <div className="user_profile">
                        <img src="https://www.pngitem.com/pimgs/m/4-42408_vector-art-design-men-fashion-vector-art-illustration.png" alt="" />
                        <i className="fas fa-caret-down"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;