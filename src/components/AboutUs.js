import Owners from '../images/MarioAndAdrianA.jpg';
import Restaurant from '../images/restaurant.jpg';

function AboutUs() {
    return (
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
    )
}

export default AboutUs;