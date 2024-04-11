import React from 'react'
import './Dashboard.scss';
import Sidebar from '../../../../components/sidebar/Sidebar'
import Performance from './Components/Performance/Performance';
import StudentInfo from './Components/StudentInfo/StudentInfo';

const Dashbord = () => {
  return (
    <div className='dashboard-container'>
      <Sidebar />
      <Performance />
      <StudentInfo />
    </div>
  )
}

export default Dashbord