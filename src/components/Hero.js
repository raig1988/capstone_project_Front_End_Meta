function Hero(props) {
    return (
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
            <img src={props.image} alt="dishes"/>
        </div>
    </section>
    )
}

export default Hero;