import React from 'react'
import Profile from  '../../.././../../../components/Profile/Profile';
import Plan from './Plan/Plan';
import LatestAct from './LatestAct/LatestAct';

import './Activity.scss'


const Activity = () => {
  return (
    <div className='activity-info'>
        <Profile/>
        <Plan/>
        <LatestAct/>
    </div>
  )
}

export default Activity