import { waitFor, fireEvent, render, screen } from '@testing-library/react';
import App, {initializeTimes, updateTimes} from './App';
import BookingForm from './components/BookingForm';

describe("Text in site", () => {
  test('check heading in booking form', () => {
    const state = jest.fn();
    const validate = jest.fn();
    render(<BookingForm availableTimes={state.availableTimes} validate={validate} />);
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

describe("Check HTML5 validation forms are working correctly", () => {
  const handleSubmit = jest.fn();
  const validate = jest.fn()
  test('Date input', () => {
    render(<BookingForm onSubmit={handleSubmit} validate={validate} />);
    const dateInput = screen.getByLabelText(/date/);
    const today = new Date();
    fireEvent.change(dateInput, {target: {  value: today }})
    waitFor(() => expect(dateInput.value).toBe(today))
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton); 
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  })
  test('Time input', () => {
    render(<BookingForm onSubmit={handleSubmit} validate={validate} />);
    const timeInput = screen.getByLabelText(/time/);
    fireEvent.change(timeInput, { target: { value: initializeTimes.availableTimes[0]}});
    waitFor(() => expect(timeInput.value).toBe(initializeTimes.availableTime[0]));
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  })
  test('Guests input', () => {
    render(<BookingForm onSubmit={handleSubmit} validate={validate} />);
    const guestsInput = screen.getByLabelText(/guests/);
    fireEvent.change(guestsInput, {target: { value:  2 }});
    waitFor(() => expect(guestsInput.value).toBe(2));
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  })
  test('Occasion input', () => {
    render(<BookingForm onSubmit={handleSubmit} validate={validate} />);
    const occasionInput = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasionInput, { target: { value: "Birthday" }});
    waitFor(() => expect(occasionInput.value).toBe("Birthday"));
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  })
})
describe("Check Javascript validation for forms", () => {
  const handleSubmit = jest.fn();
  const validate = jest.fn()
  test("Button enabled when all fields set", () => {
    render(<BookingForm onSubmit={handleSubmit} validate={validate} />);
    const dateInput = screen.getByLabelText(/date/);
    const today = new Date();
    fireEvent.change(dateInput, {target: { value: today }}) 
    waitFor(() => expect(dateInput.value).toBe(today));
    const timeInput = screen.getByLabelText(/time/);
    fireEvent.change(timeInput, { target: { value: initializeTimes.availableTimes[0]}});
    waitFor(() => expect(timeInput.value).toBe(initializeTimes.availableTime[0]));
    const guestsInput = screen.getByLabelText(/guests/);
    fireEvent.change(guestsInput, {target: { value:  2 }});
    waitFor(() => expect(guestsInput.value).toBe(2));
    const occasionInput = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasionInput, { target: { value: "Birthday" }});
    waitFor(() => expect(occasionInput.value).toBe("Birthday"));
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    waitFor(() => expect(handleSubmit).toHaveBeenCalled());
    waitFor(() => expect(submitButton).not.toHaveAttribute("disabled"));
  })
})
