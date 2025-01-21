import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom';
import './MyBooking.css'
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Contact from './Contact';
const MyBooking = () => {

    const { user, isAuthenticated, loginWithRedirect } = useAuth0();
    const [bookingData, setBookingData] = useState(null);

    const location = useLocation();
    const {
        selectedCity = '',
        selectedCity2 = '',
        travelers = null,
        travelClass = null,
    } = location.state || {};

    // Destructure flight data (make sure flight is defined)
    const flight = location.state?.flight || null;

    



      // Combined useEffect for saving and retrieving booking data
    useEffect(() => {
        if (isAuthenticated && user) {
            const savedBooking = localStorage.getItem(`booking_${user.sub}`);
            if (savedBooking) {
                setBookingData(JSON.parse(savedBooking));
            } else {
                const userBooking = {
                    selectedCity,
                    selectedCity2,
                    travelers,
                    travelClass,
                    flight,
                };
                localStorage.setItem(`booking_${user.sub}`, JSON.stringify(userBooking));
                setBookingData(userBooking);
            }
        }
    }, [isAuthenticated, user, selectedCity, selectedCity2, travelers, travelClass, flight]);



    // If not authenticated, redirect to login or show a prompt
    if (!isAuthenticated) {
        return (
            <div className="login-prompt">
                <p>You must log in to view your bookings.</p>
                <button onClick={() => loginWithRedirect()}>Log In</button>
                <Contact/>
            </div>
        );
    }

    
    if (!bookingData) {
        return <>
            <p style={{ width: "80vw", margin: "80px", textAlign: "center", fontSize: "30px", backgroundColor: "black", color: "white" }}>No flight data available. Please go back and select a flight.</p>

            <ul style={{ listStyle: "none" }}>
                <li style={{ listStyle: "none", color: "black", textAlign: "center" }}>

                    <Link style={{ textDecoration: "none", color: "black", fontSize: "26px", fontWeight: "bold", marginTop: "30px", textAlign: "center", border: "1px solid black", padding: "5px", borderRadius: "15px", background: "yellow" }} to="/search-flight">Search Flight</Link>
                </li>
            </ul>
        </>;
    }

    const { selectedCity: savedCity, selectedCity2: savedCity2, travelers: savedTravelers, travelClass: savedClass, flight: savedFlight } = bookingData ;


    return (
        <div className='my-booking-container'>
            <div className="confirm-flight-details">
                <p>Booking Confirmation &#10003;</p>
            </div>
            <div className="booking-details">
               
                <p>From: {savedCity?.cityName || selectedCity.cityName} ({savedCity?.airportCode || selectedCity.airportCode})</p>
                <p>To: {savedCity2?.cityName || selectedCity2.cityName} ({savedCity2?.airportCode || selectedCity2.airportCode})</p>
                <p>Travelers: {savedTravelers?.value || travelers?.value}</p>
                <p>Class: {savedClass?.label || travelClass?.label}</p>
            </div>
            <div className="flight-info">


                

                <p>{savedFlight?.airline || flight?.airline || 'N/A'}</p>
                <p>Departure: {savedFlight?.departure || flight?.departure || 'N/A'}</p>
                <p>Duration: {savedFlight?.duration || flight?.duration || 'N/A'}</p>
                <p>Arrival: {savedFlight?.arrival || flight?.arrival || 'N/A'}</p>
                <p>Price: {savedFlight?.price || flight?.price || 'N/A'}</p>
            </div>

        </div>
    )
}

export default MyBooking
