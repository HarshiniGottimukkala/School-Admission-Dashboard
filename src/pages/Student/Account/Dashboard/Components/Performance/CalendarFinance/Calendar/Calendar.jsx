import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import './Calendar.scss'

const Calendar = () => {
    return (
        <div className="calendar">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <h1>School calendar</h1>
                <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} style={{ margin: 0, padding: 0 }}/>
            </LocalizationProvider>
        </div>
    )
}

export default Calendar