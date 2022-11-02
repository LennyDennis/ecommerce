import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './SideNav.css';


const NavBar = () => {
    return (
        <Container>
            <Navbar fixed="top" expand="lg" variant="light" >
                <h5>Navbar</h5>
            </Navbar>
        </Container>
    )
}

export default NavBar