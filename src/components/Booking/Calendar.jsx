import React, { useState } from 'react'
import Calendar from 'react-calendar'
import './Calendar.css'
import { FaAngleDown } from "react-icons/fa";

const CalendarData = () => {
    const [date, setDate] = useState(new Date())

    const [isCalendarVisible, setIsCalendarVisible] = useState(false);
    const [view, setView] = useState('month'); // Manage calendar view
    // Format the date as "15 Jan 2025"
    const formatDate = (date) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-US', options).replace('-', '-');
    };

    // Handle date change
    const onChange = (selectedDate) => {
        setDate(selectedDate);
        setIsCalendarVisible(false); // Hide calendar after selecting a date
    };

    // Toggle calendar visibility
    const toggleCalendar = () => {
        setIsCalendarVisible((prev) => !prev);
    };

    // Disable past dates
    const disablePastDates = ({ date }) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Remove time part for comparison
        return date < today;
    };


      // Ensure transition to month view when clicking a year
   
        
        return (

            <div className="departure-date">
                <p style={{ position: "absolute", marginTop: "-84px", marginRight: "60px", zIndex: '1', background: 'rgb(252,229,99)', fontWeight: "bold", border:"0.1px solid rgb(252,229,99)", }}>Date</p>
                {/* Visible Date Section */}
                <div className="dateDetails" onClick={toggleCalendar}>
                    {formatDate(date)} 
                </div>
                <div className="dropdownButton" onClick={toggleCalendar}>
                <div className="arrow">
                <FaAngleDown />
                </div>
                    
                </div>

                {/* Calendar Popup */}
                {isCalendarVisible && (
                    <div className="calendar-container">
                        <Calendar onChange={onChange} value={date}

                            tileDisabled={disablePastDates}
                            maxDetail="month"
                            
                        />
                    </div>
                )}
            </div>

        )
    }

    export default CalendarData

