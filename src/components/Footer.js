import Logo from '../images/Logo.svg';
import { Link, Outlet } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div><img src={Logo} alt="Little Lemon logo" /></div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><Link to="/orderonline">Order online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <Outlet />
        </footer>
    )
}

export default Footer;