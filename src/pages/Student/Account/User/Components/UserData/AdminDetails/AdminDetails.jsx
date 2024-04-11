import React from 'react'
import cover from '../../assets/cover.png';
import profile from '../../assets/profile.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

import './AdminDetails.scss';

const AdminDetails = () => {
  return (
    <div className='admin-details'>
      <div className="back-ground" style={{ backgroundImage: `url(${cover})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <img className='picture' src={profile}/>
      </div>
      <div className="name-details">

        <div className="name">
          <h1>Harshini</h1>
          <p>Admin</p>
          <div className="location">
            <LocationOnIcon sx={{fontSize : 18, color :'#A098AE'}}/>
            <p>Jakarta, Indonesia</p>
          </div>
        </div>

        <div className="contact">
          <p>Phone</p>
          <div className="symbol">
            <div className="call">
              <CallIcon sx={{fontSize : 20, color :'white', cursor :'pointer'}}/>
            </div>
            <p>+12 345 6789 0</p>
          </div>
        </div>
        <div className="contact">
          <p>Email</p>
          <div className="symbol">
            <div className="call">
              <EmailIcon sx={{fontSize : 20, color :'white', cursor :'pointer'}}/>
            </div>
            <p>jordan@mail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDetails