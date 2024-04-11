import React, { useEffect, useState } from 'react';
import HouseIcon from '@mui/icons-material/House';
import AttributionIcon from '@mui/icons-material/Attribution';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import careerpedia from '../../assets/careerpedia.png'


import './Sidebar.scss';
import {useParams,useLocation} from "react-router-dom"



const sidebar = () => {

  const location = useLocation();

  const [selected, setSelected] = useState();

  useEffect(()=>{
    setSelected(location.pathname)
    console.log(location.pathname)
  },[location]);

  return (
    <aside className='sidebar-content'>
      <div className='list'>
        <div className='sidebar-title'>
          <img className='academy' src={careerpedia}/>
        </div>
        <div className="sidebar-list">
          <Link to="/dashboard" className={selected == "/dashboard" ? 'sidebar-list-item-show' : 'sidebar-list-item'} >
            <HouseIcon className='icon-home' />
            <p className="link-item" >Dashboard</p>
          </Link>
          <Link to="/student" className={selected == "/student" ? 'sidebar-list-item-show' : 'sidebar-list-item'} >
            <AttributionIcon className='icon-home' />
            <p className="link-item">Student</p>
          </Link>
          <Link to="/teacher" className={selected == "/teacher" ? 'sidebar-list-item-show' : 'sidebar-list-item'} >
            <AccountBoxIcon className='icon-home' />
            <p className="link-item" >Teacher</p>
          </Link>
          <Link to="/user" className={selected == "/user" ? 'sidebar-list-item-show' : 'sidebar-list-item'} >
            <Diversity3Icon className='icon-home' />
            <p className="link-item" >User</p>
          </Link>
          {/* <Link to="/chat" className={selected == "/chat" ? 'sidebar-list-item-show' : 'sidebar-list-item'} >
            <ChatBubbleOutlineIcon className='icon-home' />
            <p className="link-item">Chat</p>
          </Link> */}
        </div>
      </div>
      <div className='logout'>
        <Link to="/" className={selected == 5 ? 'sidebar-list-item-show' : 'sidebar-list-item'} >
          <LogoutIcon className='icon-home' />
          <p className="link-item">Logout</p>
        </Link>
      </div>
    </aside>
  )
}

export default sidebar