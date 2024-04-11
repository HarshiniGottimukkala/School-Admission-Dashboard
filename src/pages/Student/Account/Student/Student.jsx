import React from 'react'
import Sidebar from '../../../../components/sidebar/Sidebar'

import './Student.scss';
import StudentData from './Components/StudentData/StudentData';


const Student = () => {
  return (
    <div className='student-container'>
      <Sidebar />
      <StudentData/>
    </div>
  )
}

export default Student