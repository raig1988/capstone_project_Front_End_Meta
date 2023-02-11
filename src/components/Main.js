import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import AboutUs from './AboutUs';
import HeroImage from '../images/restauranfood.jpg';
import GreekSalad from '../images/greekSalad.jpg';
import LemonDessert from '../images/lemonDessert.jpg';
import BruschettaImage from '../images/bruschettaImage.png';

function Main() {
    return (
        <main>
            <Hero image={HeroImage} />
            <Specials GreekSalad={GreekSalad} BruschettaImage={BruschettaImage} LemonDessert={LemonDessert} />
            <Testimonials />
            <AboutUs />
        </main>
    )
}

export default Main;