import { render, screen } from '@testing-library/react';
import App, {initializeTimes, updateTimes} from './App';
import BookingForm from './components/BookingForm';

describe("Text in site", () => {
  test('check heading in booking form', () => {
    const state = jest.fn();
    render(<BookingForm availableTimes={state.availableTimes} />);
    const labelForm = screen.getByLabelText('Choose date');
    expect(labelForm).toBeInTheDocument();
  })
})

describe("Test functions in site", () => {
  test('Check initializeTimes values to be correct', () => {
    expect(initializeTimes.availableTimes).toBeDefined();
  })
  test('Check updateTimes function to be correct', () => {
    let action = {
      type : "date"
    } 
    expect(updateTimes(initializeTimes, action)).toBeDefined();
  })
})
