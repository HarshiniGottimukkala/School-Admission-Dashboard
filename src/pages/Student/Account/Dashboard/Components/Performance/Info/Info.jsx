import React from 'react'
import HouseIcon from '@mui/icons-material/House';
import AttributionIcon from '@mui/icons-material/Attribution';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

import './Info.scss';

const Info = () => {
  return (
    <div className='info'>
      <div className="students">
        <div className="icon student-icon">
          <HouseIcon className='icon-home' sx={{color : '#FFFFFF'}}/>
        </div>
        <div className="details">
          <p>Students</p>
          <h2>932</h2>
        </div>
      </div>
      <div className="students">
      <div className="icon teacher-icon">
        <AttributionIcon className='icon-home' sx={{color : '#FFFFFF'}} />
      </div>
        <div className="details">
          <p>Teachers</p>
          <h2>754</h2>
        </div>
      </div>
      <div className="students">
      <div className="icon event-icon">
        <CalendarTodayIcon className='icon-home' sx={{color : '#FFFFFF'}}/>
      </div>
        <div className="details">
          <p>Events</p>
          <h2>40</h2>
        </div>
      </div>
      <div className="students">
      <div className="icon food-icon">
        <RestaurantMenuIcon className='icon-home'sx={{color : '#FFFFFF'}} />
      </div>
        <div className="details">
          <p>Food</p>
          <h2>32K</h2>
        </div>
      </div>
    </div>
  )
}

export default Info