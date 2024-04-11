import React from 'react'
import Profile from '../../../../../../components/Profile/Profile'
import './StudentInfo.scss'
import RecentStudents from './RecentStudents/RecentStudents'
import Messages from './Messages/Messages'
import FoodMenu from './FoodMenu/FoodMenu'

const StudentInfo = () => {
  return (
    <div className='student-information'>
      <Profile/>
      <RecentStudents/>
      <Messages/>
      <FoodMenu/>
    </div>
  )
}

export default StudentInfo