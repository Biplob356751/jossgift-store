import React from 'react';
import { Link } from 'react-router-dom';
import "./Signup.css"
const Signup = () => {

    const handleLogin = () => {
        document.getElementById('sign_up').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    }

    const handleRegister = () => {
        document.getElementById('sign_up').style.display = 'block';
        document.getElementById('login').style.display = 'none';
    }

    return (
        <div className='sign_up_section'>
           <div className='container_fluid'>
                <div className='sign_up_content' id='sign_up'>
                    <h1>Please Sign Up...</h1>
                    <div className='sign_up'>
                        <div className='text_container'>
                            <input type="text" placeholder="UserName:" autoFocus="true"/><i className="fa fa-user"></i>
                        </div>
                        <div className="text_container">
                            <input type="email" placeholder="Email Address:" /><i className="fa fa-envelope"></i>
                        </div>
                        <div className="text_container">
                            <input type="password" placeholder="Password:" /><i className="fa fa-lock"></i>
                        </div>
                        <div className="text_container">
                            <input type="password" placeholder="Confirm Password:" /><i className="fa fa-lock"></i>
                        </div>
                        <Link to="/">Forgot your password</Link> 
                        <button>Sign Up</button>
                        <span>You Have Already Registered Please</span> <span onClick={handleLogin}  className="login">LogIn</span>
                        <div className="signIn_social_icon">
                            <div className="facebook_signIn">
                                <i className="fab fa-facebook"></i>
                                <span style={{marginLeft: "10px", color: "#fff"}}>Login With Facebook</span>
                            </div>
                            <div className="facebook_signIn google_signIn">
                                <i className="fab fa-google"></i>
                                <span style={{marginLeft: "10px", color: "#fff"}}>Login With Google</span>
                            </div>
                            <div className="facebook_signIn github_signIn">
                                <i className="fab fa-github"></i>
                                <span style={{marginLeft: "10px", color: "#fff"}}>Login With Github</span>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="login_section " id="login">
                    <h1>Please LogIn...</h1>
                    <div className="login_container">
                        <div className="email_container">
                            <input type="email" placeholder="Email Address" autoFocus="true" /><i className="fa fa-envelope"></i>
                        </div>
                        <div className="email_container">
                            <input type="password" placeholder="Password" /><i className="fa fa-lock"></i>
                        </div>
                        <input type="checkbox"/> <span className="remeber_content">Remember Me</span>
                        <button>Log In</button>
                        <span style={{fontSize: "13px"}}>You Don't Register Please</span> <span onClick={handleRegister} style={{color: "blue", cursor: "pointer"}}>Register</span>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Signup;