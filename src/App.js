import './App.css';
import HomePage from './components/Homepage';
import BookingPage from './components/BookingPage';
import NoPage from './components/NoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useReducer, useState} from 'react';

// reducer
export const updateTimes = (state, action) => {
  return state;
}
// initial state
export const initializeTimes = {availableTimes : ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]};

function App() {

  
  const [state, dispatch] = useReducer(updateTimes, initializeTimes); 

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("Birthday");

  const handleChange = (e) => {
    if (e.target.id === "res-date") {
        setDate(e.target.value);
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
    console.log('Date selected is', date);
    console.log('Time selected is', time);
    console.log('The number of guests is', guests);
    console.log('The occasion is', occasion);
}

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/booking" element={
          <BookingPage 
            availableTimes={state} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            date={date} 
            guests={guests} 
            occasion={occasion}  />
          }></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
