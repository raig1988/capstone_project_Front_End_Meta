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
            <Hero image={HeroImage} aria-label='presentation' />
            <Specials aria-label='different dishes' GreekSalad={GreekSalad} BruschettaImage={BruschettaImage} LemonDessert={LemonDessert} />
            <Testimonials aria-label='user opinions' />
            <AboutUs aria-label='restaurant info' />
        </main>
    )
}

export default Main;