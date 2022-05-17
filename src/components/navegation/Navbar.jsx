import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget.jsx"
import './Navbar.scss'
import logo from "../assets/logoBonaDrinks.png";


const NavBar = () => {
    return (
        <>
            <Navbar className="navBg" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" >
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/aboutUs">Acerca de Nosotros</Nav.Link>
                            <Nav.Link as={Link} to="/shop">Tienda</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <CartWidget />
            </Navbar>

            <section>
                <Outlet></Outlet>
            </section>
        </>
    )
}
export default NavBar