import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext, FavContext } from '../../App';
import Logo from "./logo.png";
import './Nav.css';

const Nav = () => {
    const [addCart, setAddCart] = useContext(CartContext);
    const [addFavourate, setAddFavourate] = useContext(FavContext);

    //Toggle Menu bar  visibility
    const handleBarIcon = () => {
        document.getElementById("menu").style.opacity = '0';
        document.getElementById("menu").style.visibility = 'hidden';
        document.getElementById("menu").style.transform = 'scaleX(0)';
        document.querySelector('body').style.width = '100%';
        document.querySelector('body').style.transition = '.3s';
        document.getElementById('bar_icon').style.opacity = '0';
        document.getElementById('bar_icon').style.visibility = 'hidden';
        document.getElementById('times_icon').style.opacity = '1';
        document.getElementById('times_icon').style.visibility = 'visible';

        if (window.innerWidth <= 992) {
            document.getElementById('menu').style.visibility = "visible";
            document.getElementById('menu').style.opacity = "1";
            document.getElementById('menu').style.transform = "scaleX(1)";
        } else {
            document.getElementById('menu').style.visibility = "hidden";
            document.getElementById('menu').style.opacity = "0";
            document.getElementById('menu').style.transform = "scaleX(0)";
        }

    };
    const handleTimesIcon = () => {
        document.getElementById("menu").style.opacity = '1';
        document.getElementById("menu").style.visibility = 'visible';
        document.getElementById("menu").style.transform = 'scaleX(1)';
        document.querySelector('body').style.width = '84%';
        document.getElementById('bar_icon').style.opacity = '1';
        document.getElementById('bar_icon').style.visibility = 'visible';
        document.getElementById('times_icon').style.opacity = '0';
        document.getElementById('times_icon').style.visibility = 'hidden';

        if (window.innerWidth <= 992) {
            document.getElementById('menu').style.visibility = "hideen";
            document.getElementById('menu').style.opacity = "0";
            document.getElementById('menu').style.transform = "scaleX(0)";
        } else {
            document.getElementById('menu').style.visibility = "visible";
            document.getElementById('menu').style.opacity = "1";
            document.getElementById('menu').style.transform = "scaleX(1)";
        }

    }

    //Toggle Menu bar  visibility end

    //dashboard_info dropdown menu
    const handleDashboard = () => {
        document.getElementById('dashboard_info').style.opacity = "1";
        document.getElementById('dashboard_info').style.visibility = "visible";
        document.getElementById('dashboard_info').style.transform = "scaleY(1)";
        document.getElementById('caret_icon').style.opacity = "0";
        document.getElementById('caret_icon').style.visibility = "hidden";
        document.getElementById('caret_icon2').style.opacity = "1"
        document.getElementById('caret_icon2').style.visibility = "visible"
    };
    const handleDashboard2 = () => {
        document.getElementById('dashboard_info').style.opacity = "0";
        document.getElementById('dashboard_info').style.visibility = "hidden";
        document.getElementById('dashboard_info').style.transform = "scaleY(0)";
        document.getElementById('caret_icon').style.opacity = "1";
        document.getElementById('caret_icon').style.visibility = "visible";
        document.getElementById('caret_icon2').style.opacity = "0"
        document.getElementById('caret_icon2').style.visibility = "hidden"
    }
    //bottom profile info drop dwon Menu
    const handleDashboard3 = () => {
        document.getElementById('dashboard_info1').style.opacity = "1";
        document.getElementById('dashboard_info1').style.visibility = "visible";
        document.getElementById('dashboard_info1').style.transform = "scaleY(1)";
        document.getElementById('dash1').style.opacity = "0";
        document.getElementById('dash1').style.visibility = "hidden";
        document.getElementById('dash2').style.opacity = "1"
        document.getElementById('dash2').style.visibility = "visible"
    };
    const handleDashboard4 = () => {
        document.getElementById('dashboard_info1').style.opacity = "0";
        document.getElementById('dashboard_info1').style.visibility = "hidden";
        document.getElementById('dashboard_info1').style.transform = "scaleY(0)";
        document.getElementById('dash1').style.opacity = "1";
        document.getElementById('dash1').style.visibility = "visible";
        document.getElementById('dash2').style.opacity = "0"
        document.getElementById('dash2').style.visibility = "hidden"
    }
    //dashboard_info dropdown menu

    return (
        <div className="nav_bar">
            <div className="container_fluid">
                <div className="main_menu_item">
                    <div className="bar_icon">
                        <i onClick={handleBarIcon} id="bar_icon" className="fa fa-bars"></i>
                        <i onClick={handleTimesIcon} id="times_icon" className="fa fa-bars"></i>
                    </div>
                    <div className="menu" id="menu">
                        <nav>
                            <ul>
                                <li><i className="fas fa-store-alt"></i> <Link to="/">Shop</Link></li>
                                <li><i className="fab fa-shopware"></i> <Link to="/about">About Us</Link></li>
                                <li><i className="fas fa-headphones"></i><Link to="/catagorypage">Catagroy</Link></li>
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
                        <Link to="/addToFavourate"><i className="far fa-heart"></i></Link>
                        <div>{addFavourate.length}</div>
                    </div>
                    <div className="cart_icon">
                        <Link to="/addToCart"><i className="fas fa-shopping-cart"></i></Link>
                        <div>{addCart.length}</div>
                    </div>
                    <div className="signup_btn">
                        <Link to="/signup">SignUp</Link>
                    </div>
                    <div className="user_profile">
                        <img src="https://www.pngitem.com/pimgs/m/4-42408_vector-art-design-men-fashion-vector-art-illustration.png" alt="" />
                        <i id="caret_icon" onClick={handleDashboard} className="fas fa-caret-down"></i>
                        <i id="caret_icon2" onClick={handleDashboard2} className="fas fa-caret-down"></i>
                        <div className="dashboard_info" id="dashboard_info">
                            <Link to="/dashboard">My Accounts</Link>
                            <Link to="/">Dashboard</Link>
                            <Link to="/dashboard/wishlist">Wish List</Link>
                            <Link to="/dashboard/orderedlist">Ordered List</Link>
                            <Link to="/signup">Logout</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttom_menu">
                <div className="cart_icon">
                    <Link to="/addToCart"><i className="fas fa-shopping-cart"></i></Link>
                    <div>{addCart.length}</div>
                </div>
                <div className="fav_icon">
                    <Link to="/addToFavourate"><i className="far fa-heart"></i></Link>
                    <div>{addFavourate.length}</div>
                </div>
                <div className="signup_btn">
                    <Link to="/signup">SignUp</Link>
                </div>
                <div className="user_profile profile_dashboard">
                    <img src="https://www.pngitem.com/pimgs/m/4-42408_vector-art-design-men-fashion-vector-art-illustration.png" alt="" />
                    <i onClick={handleDashboard3} className="fas fa-caret-down" id="dash1"></i>
                    <i onClick={handleDashboard4} className="fas fa-caret-down" id="dash2"></i>
                    <div className="dashboard_info1" id="dashboard_info1">
                        <Link to="/dashboard">My Accounts</Link>
                        <Link to="/">Dashboard</Link>
                        <Link to="/dashboard/wishlist">Wish List</Link>
                        <Link to="/dashboard/orderedlist">Ordered List</Link>
                        <Link to="/signup">Logout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;