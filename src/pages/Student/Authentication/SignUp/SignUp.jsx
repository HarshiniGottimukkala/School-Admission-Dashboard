import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { InputAdornment } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

import './SignUp.scss'
import signin from '../assets/Illustration.png'
import googleImage from '../assets/google.png'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SignUp = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    checkbox: false
  });

  const [firstNameErr, setFirstNameErr] = useState('');
  const [lastNameErr, setLastNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [mobileErr, setMobileErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [confirmPasswordErr, setConfirmPasswordErr] = useState('');
  const [checkboxErr, setCheckboxErr] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  let handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  let hanldeSubmit = (e) => {
    e.preventDefault();
    let firstNameError = validateFirstName(formData.firstName);
    let lastNameError = validateLastName(formData.lastName);
    let emailError = validateEmail(formData.email);
    let mobileError = validateMobile(formData.mobile);
    let passwordError = validatePassword(formData.password);
    let confirmPasswordError = validateConfirmPassword(formData.password, formData.confirmPassword);
    let checkboxError = validateCheckbox(formData.checkbox);
    setFirstNameErr(firstNameError);
    setLastNameErr(lastNameError);
    setEmailErr(emailError);
    setMobileErr(mobileError);
    setPasswordErr(passwordError);
    setConfirmPasswordErr(confirmPasswordError);
    setCheckboxErr(checkboxError);

    if (!firstNameError && !lastNameError && !emailError && !mobileError && !passwordError && !confirmPasswordErr && !checkboxError) {
      setShowPopup(true);
      setFormData(
        {
          firstName: '',
          lastName: '',
          email: '',
          mobile: '',
          password: '',
          confirmPassword: '',
          checkbox: false
        });
    }
    console.log(formData);
  }

  let validateFirstName = (firstName) => {
    let firstnameregex = /[A-Za-z][A-Za-z0-9_]{4,}$/i;
    if (!firstName) {
      return 'First name is required';
    } else if (!firstnameregex.test(firstName)) {
      return 'Please enter valid name'
    }
    return '';
  };

  let validateLastName = (lastName) => {
    let lastnameregex = /[A-Za-z][A-Za-z0-9_]{4,}$/i;
    if (!lastName) {
      return 'Last name is required';
    } else if (!lastnameregex.test(lastName)) {
      return 'Please enter valid name'
    }
    return '';
  };

  let validateEmail = (email) => {
    let emailregex = /^[a-zA-Z0-9.-_]+@[a-zA_Z0-9._]+\.[a-zA-Z]{2,}$/i;
    if (!email) {
      return 'Email is required';
    } else if (!emailregex.test(email)) {
      return 'Please enter valid email address'
    }
    return '';
  };

  let validateMobile = (mobile) => {
    let mobileregex = /^[6-9]\d{9}$/;
    if (!mobile) {
      return 'Mobile number is required';
    } else if (!mobileregex.test(mobile)) {
      return 'Please enter valid mobile number'
    }
    return '';
  };

  let validatePassword = (password) => {
    let passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!password) {
      return 'Password is required';
    } else if (!passwordregex.test(password)) {
      return 'Please enter valid password';
    }
    return '';
  };

  let validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      return 'Passwords do not match';
    }
    return '';
  };

  let validateCheckbox = (checkbox) => {
    if (!checkbox) {
      return 'Please agree to the terms and conditions';
    }
    return '';
  };

  return (

    <div className='signup'>
      <div className="activityImage">
        <div className="rounded">
          <div className="circle">
            <img src={signin} alt="" />
          </div>
        </div>
      </div>

      <div className="form">

        <div className="content">
          <h2>Sign Up for an Account</h2>
        </div>

        <form className='forminputs' onSubmit={hanldeSubmit}>

          <div className="name">
            <TextField className="customTextField" type='text' placeholder="First Name" fullWidth name="firstName" value={formData.firstName} helperText={firstNameErr} onChange={handleChange} error={Boolean(firstNameErr)}
              InputProps={{
                sx: {
                  borderRadius: 3,
                },
              }}
              sx={{
                borderRadius: 3,
              }} ></TextField>
            <TextField className="customTextField" type='text' placeholder="Last Name" fullWidth name="lastName" value={formData.lastName} helperText={lastNameErr} onChange={handleChange} error={Boolean(lastNameErr)} InputProps={{
              sx: {
                borderRadius: 3,
              },
            }}
              sx={{
                borderRadius: 3,
              }} ></TextField>
          </div>

          <div className="inputs">
            <TextField className="customTextField" type='email' placeholder="Email Id" fullWidth name="email" value={formData.email} helperText={emailErr} onChange={handleChange} error={Boolean(emailErr)} InputProps={{
              sx: {
                borderRadius: 3,
              },
            }}
              sx={{
                borderRadius: 3,
              }}></TextField>

            <TextField className="customTextField" type='number' placeholder="Mobile Number" fullWidth name="mobile" value={formData.mobile} helperText={mobileErr} onChange={handleChange} error={Boolean(mobileErr)} InputProps={{
              sx: {
                borderRadius: 3,
              },
            }}
              sx={{
                borderRadius: 3,
              }}></TextField>

            <TextField className="customTextField" type='password' placeholder="Password" fullWidth name="password" value={formData.password} helperText={passwordErr} onChange={handleChange} error={Boolean(passwordErr)} InputProps={{
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
              }}></TextField>

            <TextField className="customTextField" type='password' placeholder="Confirm Password" fullWidth name="confirmPassword" value={formData.confirmPassword} helperText={confirmPasswordErr} onChange={handleChange} error={Boolean(confirmPasswordErr)} InputProps={{
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

              }}></TextField>

          </div>



          <div className="termsandconditions">
            <Checkbox className='checkbox' {...label} name="checkbox" checked={formData.checkbox} onChange={handleChange} error={Boolean(checkboxErr)} />
            {/* <p className='conditions'>{checkboxErr}</p> */}
            <p className='conditions'>By creating an account means you agree to the <span>Terms
              & Conditions</span> and our <span>Privacy Policy</span></p>
          </div>

          <Button type="submit" variant="contained" fullWidth>Sign Up</Button>
        </form>

        <div className="horizontal">
          <hr />
          <p className='para'>or sign up with</p>
          <hr />
        </div>

        <Button className="googlebutton" variant="outlined">
          <img src={googleImage} alt="" />
          <span>Sign in with Google</span>
        </Button>

        <p className='sign-up'>Already have an account? <Link to='/'><Button className="signupbutton" variant="text">Sign In</Button></Link></p>
      </div>
      <Popup open={showPopup} onClose={() => setShowPopup(false)} >
        <div className="popup-content">
          <h2 className='popup-heading'>Congratulations!</h2>
          <p className='content-desc'>Account created successfully.</p>
        </div>
      </Popup>

    </div>

  )

}

export default SignUp