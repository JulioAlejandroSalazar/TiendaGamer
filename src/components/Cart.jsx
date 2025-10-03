import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

// componente que muestra el carrito de compras
function Cart({ cart, removeFromCart }) {
  // si el carrito esta vacio, mostrar mensaje
  if (cart.length === 0) {
    return <h4 className="text-center mt-4">Tu carrito está vacío</h4>;
  }

  // calcular total del carrito
  const total = cart.reduce((sum, item) => sum + item.precio, 0);

  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title>Carrito de compras</Card.Title>

        {/* lista de productos en el carrito */}
        <ListGroup variant="flush" className="mb-3">
          {cart.map((item) => (
            <ListGroup.Item
              key={item.id}
              className="d-flex justify-content-between align-items-center"
            >
              <span>{item.titulo} - ${item.precio}</span>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(item.id)}
              >
                X
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>

        {/* mostrar total */}
        <h5>Total: ${total}</h5>

        {/* botón para finalizar compra */}
        <Button variant="success" className="mt-2">
          Finalizar compra
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cart;
