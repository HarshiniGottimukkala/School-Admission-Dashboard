import React from 'react';
import Sidebar from '../../../../components/sidebar/Sidebar'
import Navbar from '../../../../components/navbar/Navbar';

import './Teacher.scss';
import TeachersData from './Components/TeachersData/TeachersData';

const Teacher = () => {
  return (
    <div className='teachers-list-cards'>
        <Sidebar/>
        <TeachersData/>
    </div>
  )
}

export default Teacher