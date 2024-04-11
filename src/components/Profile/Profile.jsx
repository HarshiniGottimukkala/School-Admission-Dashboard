import React from 'react'
import profile from '../../assets/profile.jpg'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import './Profile.scss'

const Profile = () => {
  return (
    <div className="profile">
      <div className="icons">
        <NotificationsIcon fontSize='medium' sx={{cursor :'pointer', color : "#A098AE"}} />
      </div>
      <div className="icons">
        <SettingsIcon fontSize='medium' sx={{cursor :'pointer', color : "#A098AE"}} />
      </div>
      <div className="label">
        <div className="profile-name">
          <h3>Harshini</h3>
          <p>Admin</p>
        </div>
        <img className='circle' src={profile}/>
      </div>
    </div >
  )
}

export default Profile