import React, { useEffect, useRef, useState } from 'react'
import "./Booking.css"
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";

import CalendarData from './Calendar';
import TravelClass from './TravelClass';
import { FaSearch } from "react-icons/fa";
import {  useNavigate } from 'react-router-dom';


const airportData = [
    { cityName: 'Agartala', airportCode: 'IXA' },
    { cityName: 'Agatti', airportCode: 'AGX' },
    { cityName: 'Agra', airportCode: 'AGR' },
    { cityName: 'Ahmedabad', airportCode: 'AMD' },
    { cityName: 'Aizawl', airportCode: 'AJL' },
    { cityName: 'Amritsar', airportCode: 'ATQ' },
    { cityName: 'Aurangabad', airportCode: 'IXU' },
    { cityName: 'Ayodhya', airportCode: 'AYJ' },
    { cityName: 'Bagdogra', airportCode: 'IXB' },
    { cityName: 'Bareilly', airportCode: 'BEK' },
    { cityName: 'Belagavi', airportCode: 'IXG' },
    { cityName: 'Bengaluru', airportCode: 'BLR' },
    { cityName: 'Bhopal', airportCode: 'BHO' },
    { cityName: 'Bhubaneswar', airportCode: 'BBI' },
    { cityName: 'Chandigarh', airportCode: 'IXC' },
    { cityName: 'Chennai', airportCode: 'MAA' },
    { cityName: 'Coimbatore', airportCode: 'CJB' },
    { cityName: 'Darbhanga', airportCode: 'DBR' },
    { cityName: 'Dehradun', airportCode: 'DED' },
    { cityName: 'Delhi', airportCode: 'DEL' },
    { cityName: 'Deoghar', airportCode: 'DGH' },
    { cityName: 'Dharamshala', airportCode: 'DHM' },
    { cityName: 'Dibrugarh', airportCode: 'DIB' },
    { cityName: 'Dimapur', airportCode: 'DMU' },
    { cityName: 'Diu', airportCode: 'DIU' },
    { cityName: 'Durgapur', airportCode: 'RDP' },
    { cityName: 'Gaya', airportCode: 'GAY' },
    { cityName: 'Goa', airportCode: 'GOI' },
    { cityName: 'Gondia', airportCode: 'GDB' },
    { cityName: 'Gorakhpur', airportCode: 'GOP' },
    { cityName: 'Guwahati', airportCode: 'GAU' },
    { cityName: 'Gwalior', airportCode: 'GWL' },
    { cityName: 'Hirasar', airportCode: 'HSR' },
    { cityName: 'Hubli', airportCode: 'HBX' },
    { cityName: 'Hyderabad', airportCode: 'HYD' },
    { cityName: 'Imphal', airportCode: 'IMF' },
    { cityName: 'Indore', airportCode: 'IDR' },
    { cityName: 'Itanagar', airportCode: 'HGI' },
    { cityName: 'Jabalpur', airportCode: 'JLR' },
    { cityName: 'Jagdalpur', airportCode: 'JGB' },
    { cityName: 'Jaipur', airportCode: 'JAI' },
    { cityName: 'Jaisalmer', airportCode: 'JSA' },
    { cityName: 'Jammu', airportCode: 'IXJ' },
    { cityName: 'Jharsuguda', airportCode: 'JRG' },
    { cityName: 'Jodhpur', airportCode: 'JDH' },
    { cityName: 'Jorhat', airportCode: 'JRH' },
    { cityName: 'Kadapa', airportCode: 'CDP' },
    { cityName: 'Kannur', airportCode: 'CNN' },
    { cityName: 'Kanpur', airportCode: 'KNU' },
    { cityName: 'Khajuraho', airportCode: 'HJR' },
    { cityName: 'Kochi', airportCode: 'COK' },
    { cityName: 'Kolhapur', airportCode: 'KLH' },
    { cityName: 'Kolkata', airportCode: 'CCU' },
    { cityName: 'Kozhikode', airportCode: 'CCJ' },
    { cityName: 'Kurnool', airportCode: 'KJB' },
    { cityName: 'Leh', airportCode: 'IXL' },
    { cityName: 'Lucknow', airportCode: 'LKO' },
    { cityName: 'Madurai', airportCode: 'IXM' },
    { cityName: 'Mangaluru', airportCode: 'IXE' },
    { cityName: 'Mumbai', airportCode: 'BOM' },
    { cityName: 'Mysuru', airportCode: 'MYQ' },
    { cityName: 'Nagpur', airportCode: 'NAG' },
    { cityName: 'Nashik', airportCode: 'ISK' },
    { cityName: 'North Goa', airportCode: 'GOX' },
    { cityName: 'Pantnagar', airportCode: 'PGH' },
    { cityName: 'Patna', airportCode: 'PAT' },
    { cityName: 'Port Blair', airportCode: 'IXZ' },
    { cityName: 'Prayagraj', airportCode: 'IXD' },
    { cityName: 'Pune', airportCode: 'PNQ' },
    { cityName: 'Raipur', airportCode: 'RPR' },
    { cityName: 'Rajahmundry', airportCode: 'RJA' },
    { cityName: 'Rajkot', airportCode: 'RAJ' },
    { cityName: 'Ranchi', airportCode: 'IXR' },
    { cityName: 'Salem', airportCode: 'SXV' },
    { cityName: 'Shillong', airportCode: 'SHL' },
    { cityName: 'Shirdi', airportCode: 'SAG' },
    { cityName: 'Shivamogga', airportCode: 'RQY' },
    { cityName: 'Silchar', airportCode: 'IXS' },
    { cityName: 'Srinagar', airportCode: 'SXR' },
    { cityName: 'Surat', airportCode: 'STV' },
    { cityName: 'Thiruvananthapuram', airportCode: 'TRV' },
    { cityName: 'Tiruchirappalli', airportCode: 'TRZ' },
    { cityName: 'Tirupati', airportCode: 'TIR' },
    { cityName: 'Tuticorin', airportCode: 'TCR' },
    { cityName: 'Udaipur', airportCode: 'UDR' },
    { cityName: 'Vadodara', airportCode: 'BDQ' },
    { cityName: 'Varanasi', airportCode: 'VNS' },
    { cityName: 'Vijayawada', airportCode: 'VGA' },
    { cityName: 'Visakhapatnam', airportCode: 'VTZ' },
];



const Booking = ({}) => {

    const navigate = useNavigate();

    const inputRef = React.useRef(null);
    const inputRef2 = React.useRef(null);

    const [airportCode, setAirportCode] = useState('')

    const [cityInput, setCityInput] = useState('');
    const [filteredCities, setFilteredCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');


    // arriva city state
    const [airportCode2, setAirportCode2] = useState('')

    const [cityInput2, setCityInput2] = useState('');
    const [filteredCities2, setFilteredCities2] = useState([]);
    const [selectedCity2, setSelectedCity2] = useState('');


    
    
    
    const [travelers, setTravelers] = useState(JSON.parse(localStorage.getItem('selectedTravelers')) || null);
  const [travelClass, setTravelClass] = useState(JSON.parse(localStorage.getItem('selectedClass')) || null);
    


    useEffect(() => {
        // Filter cities based on the user input
        if (cityInput) {
            const filtered = airportData.filter((item) =>
                item.cityName.toLowerCase().startsWith(cityInput)
            );
            setFilteredCities(filtered);

        } else {
            setFilteredCities([]);
        }


    }, [cityInput]);

    const handleCityChange = (e) => {
        setCityInput(e.target.value);

    };

    //Arrival code part
    useEffect(() => {
        // Filter cities based on the user input
        if (cityInput2) {
            const filtered = airportData.filter((item) =>
               
                item.cityName.toLowerCase().startsWith(cityInput2)

            );
            setFilteredCities2(filtered);

        } else {
            setFilteredCities2([]);
        }


    }, [cityInput2]);

    const handleCityChange2 = (e) => {
        setCityInput2(e.target.value);

    };

    const handleCitySelect = (city, e) => {
        console.log("Clicked selected city")
        setSelectedCity(city);
        setCityInput(city.cityName); // Set input to the selected city
        setAirportCode(city.airportCode);
        setFilteredCities([]); // Clear suggestions after selection
    };


    const handleCitySelect2 = (city, e) => {

        setSelectedCity2(city);
        setCityInput2(city.cityName); // Set input to the selected city
        setAirportCode2(city.airportCode);
        setFilteredCities2([]); // Clear suggestions after selection

    };

    const handleClassChange = (option) => {
        setTravelClass(option);
    };
    const handleTravelerChange = (option) => {
        setTravelers(option);
    };

    const handleSearch=()=>{
     
       
        if(!selectedCity ){
            alert("Please select Departure city")
            return
        }
         if(!selectedCity2){
            alert("Please select Arrival City")
            return
        }
        if(selectedCity.cityName === selectedCity2.cityName){
            alert("Departure and Arrival cities cannot be Same!")
            return
        }
        if(!travelers){
            alert("Please select Traveler")
            return
        }
            if(!travelClass){
                alert("Please select class")
                return
            }
        else{
            navigate('/search-flight')
        }
        navigate('/flightdetails', {
            state: {
                selectedCity,
                selectedCity2,
                travelers,
                travelClass,
            },
        });
    }



    useEffect(() => {
        // Load data from localStorage on mount
        const storedDepartureCity = JSON.parse(localStorage.getItem('selectedCity'));
        const storedArrivalCity = JSON.parse(localStorage.getItem('selectedCity2'));
      
        if (storedDepartureCity) {
          setSelectedCity(storedDepartureCity);
          setCityInput(storedDepartureCity.cityName);
          setAirportCode(storedDepartureCity.airportCode);
        }
        if (storedArrivalCity) {
          setSelectedCity2(storedArrivalCity);
          setCityInput2(storedArrivalCity.cityName);
          setAirportCode2(storedArrivalCity.airportCode);
        }
      }, []);
      
      useEffect(() => {
        // Save to localStorage whenever city selections change
        if (selectedCity) {
          localStorage.setItem('selectedCity', JSON.stringify(selectedCity));
        }
        if (selectedCity2) {
          localStorage.setItem('selectedCity2', JSON.stringify(selectedCity2));
        }
      }, [selectedCity, selectedCity2]);
      

     

    return (
        <div className="main">
            <div className="booking-para">
                    <p>Search Your Oneway Flight</p>
                </div>
            <div className='booking-container'>
                
                <div className="all-options">


                    <div className="city-container">

                        <div className="Departure-city">
                            <p style={{ position: "absolute", marginTop: "-84px", textAlign: "center", marginLeft: "20px", zIndex: '1', fontWeight: "bold", background: 'rgb(252,229,99)' }}>Departure City</p>
                            <div className="flight-logo">

                                <FaPlaneDeparture />
                            </div>
                            <form action="">

                                <div className="city-input-container">

                                    <span className="airport-code">
                                        {selectedCity && cityInput.length > 0 ? selectedCity.airportCode : '---'}


                                    </span>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        className='city-input'
                                        value={cityInput}
                                        onChange={handleCityChange}
                                        placeholder="Enter city name"
                                    />
                                </div>
                                {filteredCities.length > 0 && (
                                    <ul className="suggestions-list">
                                        {filteredCities.map((item) => (

                                            <li
                                                key={item.airportCode2}
                                                onClick={() => {
                                                    handleCitySelect(item)
                                                }}
                                            >
                                                <p>{item.cityName} ({item.airportCode}) </p>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </form>

                        </div>
                        <div className="Departure-city">
                            <p style={{ position: "absolute", marginTop: "-84px", textAlign: "center", marginLeft: "20px", zIndex: '1', fontWeight: "bold", background: 'rgb(252,229,99)' }}>Arrival City</p>
                            <div className="flight-logo">

                                <FaPlaneArrival />
                            </div>
                            <form action="" onSubmit={handleSearch}>

                                <div className="city-input-container">

                                    <span className="airport-code">
                                        {selectedCity2 && cityInput2.length > 0 ? selectedCity2.airportCode : '---'}

                                    </span>
                                    <input
                                        ref={inputRef2}
                                        type="text"
                                        className='city-input'
                                        value={cityInput2}
                                        onChange={handleCityChange2}
                                        placeholder="Enter city name"
                                    />
                                </div>
                                {filteredCities2.length > 0 && (
                                    <ul className="suggestions-list">
                                        {filteredCities2.map((item) => (
                                            <li
                                                key={item.airportCode}
                                                onClick={() => {
                                                    handleCitySelect2(item)
                                                }}
                                            >
                                                <p>{item.cityName} ({item.airportCode}) </p>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </form>
                        </div>
                    </div>
                    <div className="calendar">
                        <CalendarData />
                    </div>
                    <div className="travel-class">
                        <TravelClass onClassChange={handleClassChange} onTravelerChange={handleTravelerChange} />
                    </div>
                </div>
            </div>
            <div className="serachButtonDiv">
                <button className='searchBtn' onClick={handleSearch} >
                    <span>
                        <FaSearch /> Search
                    </span>
                </button>
            </div>

        </div>
    )
}

export default Booking
