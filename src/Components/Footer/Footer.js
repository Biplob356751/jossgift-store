import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from './logo.png';

const Footer = () => {
    return (
        <div className="footer_section">
            <div className="footer_content">
                <div className="footer_content_logo">
                    <img src={Logo} alt="" />
                    <p>Location: Mirpur-12, Dhaka-1200</p>
                    <p>Phone: 01302480286</p>
                    <p>Alawyes At Your service</p>
                </div>
                <div className="customar_service">
                    <h3>Customar Service</h3>
                    <Link to='/'>FAQ</Link>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/'>Privacy Policy</Link>
                    <Link to='/'>Treams & Condition</Link>
                    <Link to='/about'>About Us</Link>
                </div>
                <div className="support">
                    <h3>Help & Support</h3>
                    <p>Mobile: 01302480286</p>
                    <p>Email: biplobhossain356751@gmail.com</p>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fas fa-envelope"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin"></i>
                    <div className="payment_method">
                        <img src="https://seeklogo.com/images/B/bkash-logo-FBB258B90F-seeklogo.com.png" alt="" />
                        <img src="https://download.logo.wine/logo/Payoneer/Payoneer-Logo.wine.png" alt="" />
                        <img src="https://www.logo.wine/a/logo/Nagad/Nagad-Horizontal-Logo.wine.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;