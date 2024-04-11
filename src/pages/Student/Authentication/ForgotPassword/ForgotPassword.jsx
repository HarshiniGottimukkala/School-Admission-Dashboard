import React, { useState } from 'react'
import './ForgotPassword.scss'
import signin from '../assets/Illustration.png'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import Popup from 'reactjs-popup';

const ForgotPassword = () => {

    const [formData, setFormData] = useState({
        email : ''
    });
    const [emailErr, setEmailErr] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    let handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    let hanldeSubmit = (e) => {
        e.preventDefault();
        let emailError = validateEmail(formData.email);
        setEmailErr(emailError);

        if (!emailError ) {
            setShowPopup(true);
            setFormData({
                email : ''
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



    return (
        <div className='passwordsection'>
            <div className="activityImage">
                <div className="rounded">
                    <div className="circle">
                        <img src={signin} alt="" />
                    </div>
                </div>
            </div>
            <div className="form">
                <div className="content">
                    <h2>Forgot password</h2>
                    <p className='welcomenote'>Enter the email address you used to create the account.</p>
                </div>
                <form className='forminputs' onSubmit={hanldeSubmit}>
                    <TextField className="customTextField" name='email' type='email' placeholder="Enter your Email address" fullWidth value={formData.email} helperText={emailErr} onChange={handleChange} error={Boolean(emailErr)}
                    InputProps={{
                        sx: {
                            borderRadius: 3,
                        },
                    }}
                        sx={{
                            borderRadius: 3,
                        }}  />
                    <Button type="submit" variant='contained' fullWidth>Send OTP</Button>
                </form>
            </div>

            <Popup open={showPopup} onClose={() => setShowPopup(false)} >
                    <div className="popup-content">
                        <p>OTP sent successfully!</p>
                    </div>
            </Popup>
        </div>
    )
}

export default ForgotPassword