import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';

import './SignIn.scss'
import signin from '../assets/Illustration.png'
import googleImage from '../assets/google.png'
import { Dashboard } from '@mui/icons-material';


const SignIn = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    // const [showPopup, setShowPopup] = useState(false);

    let handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    let hanldeSubmit = (e) => {
        e.preventDefault();
        let emailError = validateEmail(formData.email);
        let passwordError = validatePassword(formData.password);
        setEmailErr(emailError);
        setPasswordErr(passwordError);

        if (!emailError && !passwordError) {
            // setShowPopup(true);
            navigate("/dashboard");
            setFormData(
                {
                    email: '',
                    password: ''
                });

                
        }

        console.log(formData);
    }

    let validateEmail = (email) => {
        let emailregex = /^[a-zA-Z0-9.-_]+@[a-zA_Z0-9._]+\.[a-zA-Z]{2,}$/i;
        if (!email) {
            return 'Email is required';
        } else if (!emailregex.test(email)) {
            return 'Please enter valid email address'
        }
        return '';
    }

    let validatePassword = (password) => {
        let passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (!password) {
            return 'Password is required';
        } else if (!passwordregex.test(password)) {
            return 'Please enter valid password';
        }
        return '';
    }


    return (

        <div className='signin'>

            <div className="activityImage">
                <div className="rounded">
                    <div className="circle">
                        <img src={signin} alt="" />
                    </div>
                </div>
            </div>

            <div className="form">

                <div className="content">
                    <h2>Sign In to your Account</h2>
                    <p className='welcomenote'>Welcome back! Please enter your detail</p>
                </div>

                <form className='forminputs' onSubmit={hanldeSubmit}>
                    <div className="inputs">
                        <TextField className="customTextField" name='email' value={formData.email} type='email' placeholder="Angela.laufeau@mail.com" fullWidth helperText={emailErr} onChange={handleChange} error={Boolean(emailErr)} 
                        InputProps={{
                            sx: {
                                borderRadius: 3,
                            },
                        }}
                            sx={{
                                borderRadius: 3,
                            }} 
                        />

                        <div className="icon">
                            <TextField className="customTextField" name='password' value={formData.password} type='password' placeholder="Password" fullWidth helperText={passwordErr} onChange={handleChange} error={Boolean(passwordErr)} InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <VisibilityOffIcon />
                                    </InputAdornment>
                                ),
                                sx: {
                                    borderRadius: 3,
                                },
                            }}
                                sx={{
                                    borderRadius: 3,
                                }}
                            />

                        </div>

                        <Link to='/forgotPassword'><p className='forgotpassword'>Forgot password?</p></Link>

                    </div>

                    <Button type="submit" variant='contained' fullWidth>Sign In</Button>

                </form>

                <div className="horizontal">
                    <hr />
                    <p className='para'>or sign in with</p>
                    <hr />
                </div>

                <Button className="googlebutton" variant="outlined">
                    <img src={googleImage} alt="" />
                    <span>Sign in with Google</span>
                </Button>

                <p className='sign-up'>Already have an account?  <Link to='/signUp'><Button className="signupbutton" variant="text">Sign up</Button></Link></p>
            </div>

           {/*  <Popup open={showPopup} onClose={() => setShowPopup(false)} >
                    <div className="popup-content">
                        <h2>Welcome!</h2>
                        <p>You are successfully signed in.</p>
                    </div>
            </Popup> */}


        </div>

    )
}

export default SignIn