import React from 'react'
import Navbar from '../../../../../../../components/navbar/Navbar'
import './Head.scss'
import Profile from '../../../../../../../components/Profile/Profile'

const Head = () => {
    return (
        <div className='header-content'>
            <div className="nav">
                <Navbar dashboardName="Teacher" />
            </div>
            <div className="pro-file">
                <Profile />
            </div>
        </div>
    )
}

export default Head