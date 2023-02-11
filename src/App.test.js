import { render, screen } from '@testing-library/react';
import App, {initializeTimes, updateTimes} from './App';
import BookingForm from './components/BookingForm';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe("Text in site", () => {
  test('check heading in booking form', () => {
    const state = jest.fn();
    render(<BookingForm availableTimes={state} />);
    const labelForm = screen.getByLabelText('Choose date');
    expect(labelForm).toBeInTheDocument();
  })
})

describe("Test functions in site", () => {
  test('Check initializeTimes values to be correct', () => {
    expect(initializeTimes.availableTimes[0]).toBe("17:00");
    expect(initializeTimes.availableTimes[2]).toBe("19:00");
    expect(initializeTimes.availableTimes[4]).toBe("21:00");
  })
  test('Check updateTimes function to be correct', () => {
    expect(updateTimes(initializeTimes)).toBe(initializeTimes);
  })
})
