import React from 'react';
import './Contact.css';

const Contact = () => {
    document.title = "JossGift || Contact us"
    return (
        <div className="contact_page">
            <div className="location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29075.051176498!2d90.1811325395508!3d24.3680322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375611bae031e503%3A0x90e7b17069fbc57e!2sKalia%20Union%20Parishod!5e0!3m2!1sen!2sbd!4v1636283721833!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className="container_fluid">
                <div className="contact_info">
                    <h2>Please Massage For Any Discussion</h2>
                    <div className="contact_input">
                        <form action="/">
                            <input type="email" placeholder="Email Address" />
                            <textarea placeholder="Massage*"></textarea>
                            <input type="submit" value="Massage" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;