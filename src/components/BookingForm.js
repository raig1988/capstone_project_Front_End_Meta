import '../BookingPage.css';

function BookingForm(props) {

    return (
        <section className="formDiv">
            <h1>Booking Form</h1>
                <div className="bookingForm">
                    <form onSubmit={props.handleSubmit} style={{ display: "grid", maxWidth: 200, gap: 20 }}>
                        <label htmlFor="res-date">Choose date</label>
                        <input value={props.date} onChange={props.handleChange} type="date" id="res-date" min={props.today} required/>
                        <label htmlFor="res-time">Choose time</label>
                        <select onChange={props.handleChange} id="res-time" required>
                            {props.availableTimes ? props.availableTimes.map((element, key) => <option key={key} value={element}>{element}</option>) : []}
                        </select>
                        <label htmlFor="guests">Number of guests</label>
                        <input value={props.guests} onChange={props.handleChange} type="number" placeholder={1} min={1} max={10} id="guests" required/>
                        <label htmlFor="occasion">Occasion</label>
                        <select value={props.occasion} onChange={props.handleChange} id="occasion" required>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                        <input type="submit" defaultValue="Make Your reservation" disabled={!props.validate()}/>
                    </form>
                </div>
        </section>
    )
}

export default BookingForm;