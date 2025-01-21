import React from 'react'

import './FlightDetails.css'
import { useLocation, useNavigate } from 'react-router-dom';

const FlightDetails = () => {

    const navigate = useNavigate();

    const flightData = [
        {
            id: 1,
            airline: 'Indigo-1',
            departure: '5:30',
            duration: '6h 10min',
            arrival: '11:40',
            price: '$90',
        },
        {
            id: 2,
            airline: 'Indigo-2',
            departure: '5:30',
            duration: '6h 10min',
            arrival: '11:40',
            price: '$70',
        },
        {
            id: 3,
            airline: 'Adani-1',
            departure: '5:30',
            duration: '6h 10min',
            arrival: '11:40',
            price: '$95',
        },
        {
            id: 4,
            airline: 'Adani-2',
            departure: '5:30',
            duration: '6h 10min',
            arrival: '11:40',
            price: '$96',
        },
        {
            id: 5,
            airline: 'AirIndia',
            departure: '5:30',
            duration: '6h 10min',
            arrival: '11:40',
            price: '$66',
        },
        {
            id: 6,
            airline: 'SpiceJ',
            departure: '5:30',
            duration: '6h 10min',
            arrival: '11:40',
            price: '$90',
        },
    ];

    const location = useLocation();
    const { selectedCity, selectedCity2, travelers, travelClass } = location.state || {};




 // Function to handle booking click
 const handleBooking = (flight) => {
    // You can pass the flight data to Booking component here, or set in a state if needed
    navigate('/mybooking', {
        state: {
            flight,
            selectedCity,
            selectedCity2,
            travelers,
            travelClass
        }
    });
  };

    return (
        <div className='flight-details-container'>
            {/* <Booking/> */}
            <h2 style={{ textAlign: "center", padding: '20px' }}>Available Flight Details</h2>
            <div className="header">
                <p>Airlines</p>
                <p>Departure</p>
                <p>Duration</p>
                <p>Arrival</p>
                <p>Price</p>
                <p style={{ opacity: "0" }}>price</p>
            </div>
            <div className="flight-info-container">
               

                {flightData.map(flight => (
                    <div key={flight.id} className="individual-flight">
                        <p className='p1'>{flight.airline}</p>
                        <p className='p2'>{flight.departure}</p>
                        <p className='p3'>{flight.duration}</p>
                        <p className='p4'>{flight.arrival}</p>
                        <p className='p5'>{flight.price}</p>
                        <button className='signupBtn p6' onClick={() => handleBooking(flight)}>
                            <span>Book Now</span>
                        </button>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default FlightDetails
