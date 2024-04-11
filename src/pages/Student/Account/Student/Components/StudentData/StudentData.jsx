import React from 'react'
import './StudentData.scss'
import Header from './Header/Header'
import StudentList from './StudentList/StudentList'

const StudentData = () => {
  return (
    <div className='student-data'>
        <Header/>
        <StudentList/>
    </div>
  )
}

export default StudentData