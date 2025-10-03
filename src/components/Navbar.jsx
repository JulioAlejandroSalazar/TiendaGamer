import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

// barra de navegacion con marca y boton de carrito
function NavBar({ cartCount, toggleCart }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* nombre de la tienda */}
        <Navbar.Brand href="#">Tienda Gamer</Navbar.Brand>

        {/* boton para mostrar/ocultar carrito */}
        <Nav className="ms-auto">
          <Button variant="outline-light" onClick={toggleCart}>
            Carrito <Badge bg="secondary">{cartCount}</Badge>
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
