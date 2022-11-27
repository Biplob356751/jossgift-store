import React from 'react';
import "./Signup.css"


const Signup = () => {

    document.title = "JossGift || Sign Up"

    const handleLogin = () => {
        document.getElementById('sign_up').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    }

    const handleRegister = () => {
        document.getElementById('sign_up').style.display = 'block';
        document.getElementById('login').style.display = 'none';
    }

    const handleForgetPass = () => {
        document.getElementById('login').style.display = 'none';
        document.getElementById('forget_section').style.display = 'block';
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
                        <button>Log In</button><br />
                        <a href='#' onClick={handleForgetPass}>Forgot your password</a> <br /><br />
                        <span style={{fontSize: "13px"}}>You Don't Register Please</span> <span onClick={handleRegister} style={{color: "blue", cursor: "pointer"}}>Register</span>
                    </div>
                </div>
                <div className="forget_pass_section" id='forget_section'>
                    <h1>Please Enter Your New Password</h1>
                    <div className="forget_pass_container">
                        <div className="pass_container">
                            <input type="password" placeholder="New Password" autoFocus="true" /><i className="fa fa-envelope"></i>
                        </div>
                        <div className="pass2_container">
                            <input type="password" placeholder="Confirm Password" /><i className="fa fa-envelope"></i>
                        </div>
                        <button>Confirm</button><br />
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Signup;