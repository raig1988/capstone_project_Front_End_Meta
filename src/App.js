import './App.css';
import HomePage from './components/Homepage';
import BookingPage from './components/BookingPage';
import NoPage from './components/NoPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useReducer, useState} from 'react';
import {fetchAPI, submitAPI} from './api'
import ConfirmedBooking from './components/ConfirmedBooking';

// reducer
export const updateTimes = (state, action) => {
  if (action.type === 'date') {
    return {
      availableTimes: fetchAPI(new Date(action.date))
    };
  }
  return state;
}
const today = new Date();
// initial state
export const initializeTimes = {availableTimes : fetchAPI(today)};

function App() {

  const navigate = useNavigate();

  const dateMin = today.toISOString().split('T')[0]
  const [state, dispatch] = useReducer(updateTimes, initializeTimes); 
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("Birthday");

  const handleChange = (e) => {
    if (e.target.id === "res-date") {
        setDate(e.target.value);
        dispatch({ type: 'date', date: e.target.value })
    } else if (e.target.id === "res-time") {
        setTime(e.target.value);
    } else if (e.target.id === "guests") {
        setGuests(e.target.value);
    } else {
        setOccasion(e.target.value);
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      "date" : date,
      "time" : time,
      "number of guests" : guests,
      "occasion" : occasion
    }
    if(submitAPI(formData)) {
      navigate('/bookingconfirmed');
    };
}

const validate = () => {
  return date.length && time.length && guests.length && occasion.length;
};

  return (
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/booking" element={
          <BookingPage 
            availableTimes={state.availableTimes} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            today={dateMin}
            date={date} 
            guests={guests} 
            occasion={occasion}
            validate={validate}  
            />
          }></Route>
        <Route path="*" element={<NoPage />}></Route>
        <Route path="/bookingconfirmed" element={<ConfirmedBooking date={date} time={time} guests={guests} occasion={occasion} />}></Route>
      </Routes>
  );
}

export default App;
