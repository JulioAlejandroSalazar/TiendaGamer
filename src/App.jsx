import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Navbar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [error, setError] = useState("");

  // carga de datos
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}assets/data.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error cargando JSON (status ${res.status})`);
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error("Error cargando productos", err);
        setError("No se pudieron cargar los productos. Intenta recargar la página.");
      });
  }, []);
  

  // agregar producto
  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  // eliminar producto
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar cartCount={cart.length} toggleCart={() => setShowCart(!showCart)} />

      <Container className="text-center my-4">
        {error ? (
          <h4 className="text-black mt-4">{error}</h4> // mensaje de error en pantalla
        ) : (
          <Row className="justify-content-center mt-4">
            <Col md={8}>
              {showCart ? (
                <Cart cart={cart} removeFromCart={removeFromCart} />
              ) : (
                <ProductList products={products} addToCart={addToCart} cart={cart} />
              )}
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default App;
