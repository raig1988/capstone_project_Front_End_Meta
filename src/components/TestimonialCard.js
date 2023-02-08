import '../TestimonialCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TestimonialCard(props) {
    return (
        <div className="testimonialCard">
            <div className="testimonialCard-stars">
                <span>
                    <FontAwesomeIcon icon={props.icon} />
                    <FontAwesomeIcon icon={props.icon} />
                    <FontAwesomeIcon icon={props.icon} />
                    <FontAwesomeIcon icon={props.icon} />
                    <FontAwesomeIcon icon={props.icon} />
                </span>
            </div>
            <div className="testimonialCard-user">
                <FontAwesomeIcon icon={props.user} />
                <div>
                    <h3>{props.name}</h3>
                    <h4>{props.social}</h4>
                </div>
            </div>
            <div className="testimonialCard-review">
                <p>{props.review}</p>
            </div>
        </div>
    )
}

export default TestimonialCard;