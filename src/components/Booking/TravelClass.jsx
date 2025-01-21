import React, { useEffect, useState } from 'react'
import './TravelClass.css'
import Select from 'react-select'




const numberOfTravelers = [
  { value: '1', label: '1 Adult' },
  { value: '2', label: '2 Adults' },
  { value: '3', label: '3 Adults' }
]
const travelClass = [
  { value: '1', label: 'Economy' },
  { value: '2', label: 'Premium Economy' },
  { value: '3', label: 'Business' },
  { value: '4', label: 'First Class ' },
]

// Remove dropdown arrow
const customComponents = {
  DropdownIndicator: () => null, // Removes the dropdown arrow
  IndicatorSeparator: () => null, // Removes the separator line
};

//Custom styles fo select menu
const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: 'rgb(255, 255, 255)',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1px',
    fontSize: '13px',
    fontWeight: "bold",
    marginLeft: "5px",
    height: "10px"
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 100,
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isSelected
      ? 'black'
      : isFocused
        ? '#d6eaff'
        : '#fff',
    color: isSelected ? '#fff' : '#333',
    padding: '10px',
    cursor: 'pointer',
    fontSize: "13px"
  }),
  placeholder: (base) => ({
    ...base,
    color: 'gray',
    textAlign: "center"
  }),
};



const TravelClass = ({ onClassChange, onTravelerChange}) => {

  const defaultTraveler = numberOfTravelers[0]; // Default: 1 Adult
  const defaultClass = travelClass[0]; // Default: Economy

  const [selectedTravelers, setSelectedTravelers] = useState(defaultTraveler);
const [selectedClass, setSelectedClass] = useState(defaultClass);



// Load data from localStorage on mount
useEffect(() => {
  const storedTravelers = JSON.parse(localStorage.getItem('selectedTravelers'));
  const storedClass = JSON.parse(localStorage.getItem('selectedClass'));
  if (storedTravelers) setSelectedTravelers(storedTravelers);
  if (storedClass) setSelectedClass(storedClass);
}, []);

// Save data to localStorage whenever state changes
useEffect(() => {
  if (selectedTravelers) {
    localStorage.setItem('selectedTravelers', JSON.stringify(selectedTravelers));
  }
  if (selectedClass) {
    localStorage.setItem('selectedClass', JSON.stringify(selectedClass));
  }
}, [selectedTravelers, selectedClass]);



  return (
    <div className='travel-class-container'>
      <p style={{ position: "absolute", marginTop: "-84px", marginRight: "60px", zIndex: '1', background: 'rgb(252,229,99)', fontWeight: "bold", border: "0.1px solid rgb(252,229,99)", }}>Traveler & Class</p>
      <div className="number-of-travelers">
        <Select

          options={numberOfTravelers} components={customComponents} styles={customStyles} placeholder="Travelers Count" value={selectedTravelers}
          onChange={(option) => {setSelectedTravelers(option)
            if (onTravelerChange) onTravelerChange(option); // Notify parent if needed
          }} />
      </div>
      <div className="class">
        <Select options={travelClass} components={customComponents} placeholder="Class" styles={customStyles} value={selectedClass}
          onChange={(option) => {
            setSelectedClass(option);
            if (onClassChange) onClassChange(option); // Notify parent if needed
          }}
        />
      </div>
    </div>
  )
}

export default TravelClass
