import React from 'react';
import './Header.scss';
import Navbar from '../../../../../../../components/navbar/Navbar'
import Profile from '../../../../../../../components/Profile/Profile';

const Header = () => {
    return (
        <div className='header-content'>
            <div className="nav">
                <Navbar dashboardName="Student"/>
            </div>
            <div className="pro-file">
                <Profile />
            </div>
        </div>
    )
}

export default Header