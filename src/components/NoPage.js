import Nav from './Nav';
import Footer from './Footer';

function NoPage() {
    return (
        <>
            <Nav />
            <h1>Error</h1>
            <h4>The page you are trying to vist doest not exist. Please try again.</h4>
            <Footer />
        </>
    )
}

export default NoPage;