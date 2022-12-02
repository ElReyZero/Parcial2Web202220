import { Container, Navbar } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import './css/navbar.css';

function Header() {
    return (<Navbar className="navbar-custom navbar-expand-md" variant="light">
        <img src="https://cdn-icons-png.flaticon.com/512/11/11178.png" style={{ width: "50px" }} alt="Page icon"></img>
        <Container className="title-container">
            <Navbar.Brand>
                <h2><FormattedMessage id="navbarTitle" /></h2>
            </Navbar.Brand>
        </Container>
    </Navbar>)
}

export default Header;