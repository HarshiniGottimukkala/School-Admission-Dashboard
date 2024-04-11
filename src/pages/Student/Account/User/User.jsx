import React from 'react'
import Sidebar from '../../../../components/sidebar/Sidebar';
import UserData from './Components/UserData/UserData'
import './User.scss';
import Activity from './Components/Activity/Activity';

const User = () => {
  return (
    <div className='user-container'>
        <Sidebar/>
        <UserData/>
        <Activity/>
    </div>
  )
}

export default User