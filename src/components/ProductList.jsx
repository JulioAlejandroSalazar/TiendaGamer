import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// lista de productos disponible para comprar
function ProductList({ products, addToCart, cart }) {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {products.map((product) => (
        // tarjeta individual de producto
        <Card key={product.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.imagen} />
          <Card.Body>
            <Card.Title>{product.titulo}</Card.Title>
            <Card.Text>{product.descripcion}</Card.Text>
            <Card.Text><strong>${product.precio}</strong></Card.Text>

            {/* boton para agregar producto al carrito */}
            <Button
              variant="primary"
              onClick={() => addToCart(product)}
              disabled={cart.find((item) => item.id === product.id)}
            >
              {cart.find((item) => item.id === product.id) ? "En carrito" : "Agregar"}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ProductList;
