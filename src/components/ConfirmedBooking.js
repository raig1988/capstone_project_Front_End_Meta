import '../ConfirmedBooking.css';
import Nav from './Nav';
import Footer from './Footer';

function ConfirmedBooking(props) {
    return (
        <>
            <Nav />
            <section className="bookingConfirmed">
                <h1>Booking confirmed</h1>
                <p>Your reservation is set for <b>{props.date}</b> at <b>{props.time}</b> with <b>{props.guests}</b> guests for your special <b>{props.occasion}</b></p>
            </section>
            <Footer />
        </>
    )
}

export default ConfirmedBooking;