import '../Card.css'

function Card(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt={props.alt} />
            </div>
            <div className="container">
                <div className="container-title">
                    <h4><b>{props.title}</b></h4>
                    <span>{props.price}</span>
                </div>
                <p>{props.description}</p>
                <p><b>Order a delivery</b></p>
            </div>
        </div>
    )
}

export default Card;