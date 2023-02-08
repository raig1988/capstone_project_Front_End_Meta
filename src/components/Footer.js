import Logo from '../images/Logo.svg'

function Footer() {
    return (
        <footer>
            <div><img src={Logo} alt="Little Lemon logo" /></div>
            <div>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Reservations</a></li>
                    <li><a>Order online</a></li>
                    <li><a>Login</a></li>
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
        </footer>
    )
}

export default Footer;