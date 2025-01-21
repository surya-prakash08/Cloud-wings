import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Booking from './components/Booking/Booking'
import FlightDetails from './components/Flight Details/FlightDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyBooking from './components/MyBooking'
import Contact from './components/Contact'

function App() {




  return (
    <>
      <Router>

        <Navbar />

        <Routes>
          {/* Define the routes */}
          <Route path="/" element={<> <Hero /> <Booking /> <Contact /></>} />
          <Route path="/home" element={<> <Hero /> <Booking /><Contact /></>} />
          <Route path="/mybooking" element={<><MyBooking />  </>} />

          <Route path='flightdetails' element={<><FlightDetails /> <Contact /> </>} />
          <Route path="/search-flight" element={<><Booking /> <FlightDetails /> </>} />
          <Route path="/contact" element={<><Hero /><Booking /> <Contact /> </>} />
        </Routes>

      </Router>
      {/* <Booking/> */}

    </>
  )
}

export default App
