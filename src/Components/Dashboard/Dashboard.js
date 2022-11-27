import React, { useState } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import AddFavourate from './../AddFavourate/AddFavourate';
import AddToCart from './../AddToCart/AddToCart';

const Dashboard = () => {
    document.title = "JossGift || My Dashboard"


    //tab tab_section

    const [tab, setTab] = useState(1);
    const handleTab = (index) => {
        setTab(index);
    }
    return (
        <div className="dashboard_page">
            <div className="container_fluid">
                <div className="dash_info">
                    <div className="user_info_image">
                        <img src="https://image.shutterstock.com/image-photo/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-250nw-1548802709.jpg" alt="image" />
                        <span>Md.Biplob</span>
                        <p>User Id: 02023932</p>
                    </div>
                    <div className="user_content_item">
                        <div className={tab === 1 ? "user active_user" : "user"} onClick={() => handleTab(1)}>My Account</div>
                        <div className={tab === 2 ? "user active_user" : "user"} onClick={() => handleTab(2)}>My Wishlist</div>
                        <div className={tab === 3 ? "user active_user" : "user"} onClick={() => handleTab(3)}>My Order</div>
                        <div><Link to="/signup">Logout</Link></div>
                    </div>
                </div>
                <div className="dashboard_content">
                    <div className={tab === 1 ? "user_content active_content_user" : "user_content"}>
                        <h3>Hi... <span>Md. Biplob</span></h3>
                        <h2>WellCome To My Shop</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil officiis laboriosam velit ab,
                         corporis eveniet molestiae temporibus, magnam esse aspernatur explicabo? Quidem sunt, qui expedita
                          quo pariatur architecto itaque deleniti quibusdam, doloribus dolores aperiam nam voluptates excepturi
                         consequatur ratione dicta enim quas, cum reiciendis nemo harum! Rem qui voluptatem non?</p>

                         <h4>Happy Shopping...</h4>
                         <div className="delivary_info">
                             <h1>Delivary Information:</h1>
                             <p><i className="fa fa-check"></i>Ordered Date: <span>7 May 2022</span></p>
                             <p><i className="fa fa-check"></i>Delivary Date: <span>10 May 2022</span></p>
                             <p><i className="fa fa-check"></i>Deliary Process: <span>Case On Delivary</span></p>
                             <p><i className="fa fa-check"></i>Delivary Charge: <span>150$</span></p>
                         </div>


                         {/* Account settings */}
                         <div className="user_information">
                            <h2>Personal Information:</h2>
                            <label>Name:</label>
                            <input type="text" placeholder="Your Name" />
                            <label>Date Of Birth:</label>
                            <input type="date" placeholder="Date Of Birth" />
                            <label>Your Email Address:</label>
                            <input type="email" placeholder="Email Address" value="biplobhossain356751@gmail.com" />
                            <label>Your Password:</label>
                            <input type="password" value="biplobhossain" />
                            <label>Gender:</label>
                            <div className="d_flex">
                                <input type="radio" id='male' name='gender'/><label for='male' >Male</label>
                                <input type="radio" id='female' name="gender" /><label for="female">Female</label>
                            </div>
                            <h4>Your Profile Picture</h4>
                            <label>Change your Profile Picture:</label>
                            <input type="file" />
                            <img src="https://image.shutterstock.com/image-photo/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-250nw-1548802709.jpg" alt="image" />
                            <button>Save</button>
                        </div>
                    </div>
                    <div className={tab === 2 ? "user_content active_content_user" : "user_content"}>
                        <AddFavourate></AddFavourate>
                    </div>
                    <div className={tab === 3 ? "user_content active_content_user" : "user_content"}>
                        <AddToCart></AddToCart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;