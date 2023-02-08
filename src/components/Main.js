import Hero from '../images/restauranfood.jpg';
import Owners from '../images/MarioAndAdrianA.jpg';
import Restaurant from '../images/restaurant.jpg';
import Card from './Card';
import TestimonialCard from './TestimonialCard';
import GreekSalad from '../images/greekSalad.jpg';
import LemonDessert from '../images/lemonDessert.jpg';
import BruschettaImage from '../images/bruschettaImage.png';
import { faStar, faUserCircle } from '@fortawesome/free-solid-svg-icons'

function Main() {
    return (
        <main>
            <section className="hero">
                <div className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <div className="hero-text-p">
                        <p>Elit sunt deserunt duis duis enim
                        Elit sunt deserunt duis duis enim.
                        Elit sunt deserunt duis duis enim.
                        Elit sunt deserunt duis duis enim.</p>
                    </div>
                    <button>Reserve a Table</button>
                </div>
                <div className="hero-image">
                    <img src={Hero} alt="dishes"/>
                </div>
            </section>
            <section className="specials">
                <div className="specials-title">
                    <h1>Specials</h1>
                    <button>Online Menu</button>
                </div>
                <div className="specials-cards">
                    <Card image={GreekSalad} title="Greek salad" price="$ 12.99" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." />
                    <Card image={BruschettaImage} title="Bruchetta" price="$ 5.99" description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." />
                    <Card image={LemonDessert} title="Lemon Dessert" price="$ 5.00" description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."  />
                </div>
            </section>
            <section className="testimonials">
                <h1>Testimonials</h1>
                <div className="testimonials-reviews">
                    <TestimonialCard icon={faStar} user={faUserCircle} name="Sara Lopez" social="Sara72" review="“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”" />
                    <TestimonialCard icon={faStar} user={faUserCircle} name="Sara Lopez" social="Sara72" review="“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”"  />
                    <TestimonialCard icon={faStar} user={faUserCircle} name="Sara Lopez" social="Sara72" review="“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”" />
                    <TestimonialCard icon={faStar} user={faUserCircle} name="Sara Lopez" social="Sara72" review="“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”" />
                </div>
            </section>
            <section className="about-us">
                <div className="about-us-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <div className="about-us-text-p">
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </div>
                </div>
                <div className="about-us-images">
                    <img className="about-us-img-restaurant" src={Restaurant} alt="Little lemon restaurant" />
                    <img className="about-us-img-owners" src={Owners} alt="Owners of the restaurant" />
                </div>
            </section>
        </main>
    )
}

export default Main;