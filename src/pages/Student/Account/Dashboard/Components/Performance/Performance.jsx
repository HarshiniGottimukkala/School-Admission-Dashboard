import React from 'react'
import './Performance.scss';
import Navbar from '../../../../../../components/navbar/Navbar';
import Info from './Info/Info';
import SchoolPerformance from './SchoolPerformance/SchoolPerformance';
import CalendarFinance from './CalendarFinance/CalendarFinance';
import StudentIntuition from './StudentIntuition/StudentIntuition';

const Performance = () => {
    return (
        <div className='performance'>
            <Navbar dashboardName="Dashboard"/>
            <Info/>
            <SchoolPerformance/>
            <CalendarFinance/>
            <StudentIntuition/>
        </div>
    )
}

export default Performance