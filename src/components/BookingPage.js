import BookingForm from "./BookingForm";
import Nav from './Nav';
import Footer from './Footer';

function BookingPage(props) {

    return (
        <>
            <Nav />
            <BookingForm availableTimes={props.availableTimes} handleChange={props.handleChange} handleSubmit={props.handleSubmit} date={props.date} guests={props.guests} occasion={props.occasion} />
            <Footer />
        </>
    )
}

export default BookingPage;