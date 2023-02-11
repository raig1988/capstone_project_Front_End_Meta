import '../BookingPage.css';

function BookingForm(props) {

    return (
        <div className="bookingForm">
            <form onSubmit={props.handleSubmit} style={{ display: "grid", maxWidth: 200, gap: 20 }}>
                <label htmlFor="res-date">Choose date</label>
                <input value={props.date} onChange={props.handleChange} type="date" id="res-date" />
                <label htmlFor="res-time">Choose time</label>
                <select onChange={props.handleChange} id="res-time">
                    {props.availableTimes ? props.availableTimes.map((element, key) => <option key={key} value={element}>{element}</option>) : []}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input value={props.guests} onChange={props.handleChange} type="number" placeholder={1} min={1} max={10} id="guests" />
                <label htmlFor="occasion">Occasion</label>
                <select value={props.occasion} onChange={props.handleChange} id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" defaultValue="Make Your reservation" />
            </form>
        </div>
    )
}

export default BookingForm;