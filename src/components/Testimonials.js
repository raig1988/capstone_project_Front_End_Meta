import TestimonialCard from "./TestimonialCard";
import { faStar, faUserCircle } from '@fortawesome/free-solid-svg-icons'

function Testimonials() {
    return (
    <section className="testimonials">
        <h1>Testimonials</h1>
        <div className="testimonials-reviews">
            <TestimonialCard icon={faStar} user={faUserCircle} name="Sara Lopez" social="Sara72" review="“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”" />
            <TestimonialCard icon={faStar} user={faUserCircle} name="Sara Lopez" social="Sara72" review="“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”"  />
            <TestimonialCard icon={faStar} user={faUserCircle} name="Sara Lopez" social="Sara72" review="“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”" />
            <TestimonialCard icon={faStar} user={faUserCircle} name="Sara Lopez" social="Sara72" review="“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”" />
        </div>
    </section>
    )
}

export default Testimonials;