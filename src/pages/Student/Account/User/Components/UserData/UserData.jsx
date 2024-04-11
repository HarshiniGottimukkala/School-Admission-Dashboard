import React from 'react'
import Navbar from '../../../../../../components/navbar/Navbar'
import AdminDetails from './AdminDetails/AdminDetails'
import ContactAndMessages from './ContactAndMessages/ContactAndMessages'

import './UserData.scss'

const UserData = () => {
  return (
    <div className='admin-details-container'>
        <Navbar dashboardName="User Dashboard"/>
        <AdminDetails/>
        <ContactAndMessages/>
    </div>
  )
}

export default UserData