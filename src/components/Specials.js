import Card from './Card';

function Specials(props) {
    return (
    <section className="specials">
        <div className="specials-title">
            <h1>Specials</h1>
            <button>Online Menu</button>
        </div>
        <div className="specials-cards">
            <Card image={props.GreekSalad} title="Greek salad" price="$ 12.99" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." />
            <Card image={props.BruschettaImage} title="Bruchetta" price="$ 5.99" description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." />
            <Card image={props.LemonDessert} title="Lemon Dessert" price="$ 5.00" description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."  />
        </div>
    </section>
    )
}

export default Specials;