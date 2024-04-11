import React from 'react'

import './CalendarFinance.scss';
import Calendar from './Calendar/Calendar';
import Finance from './Finance/Finance';

const CalendarFinance = () => {


  return (
    <div className="calendar-finance">
      <Calendar />
      <Finance />
    </div>

  );
}

export default CalendarFinance