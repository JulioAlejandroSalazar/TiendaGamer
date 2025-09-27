import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.discountPrice, 0);

  return (
    <div>
      <h4>
        Carrito de compras{" "}
        <span className="badge bg-primary">{cart.length}</span>
      </h4>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item.name} - ${item.discountPrice.toLocaleString()}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeFromCart(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <p className="fw-bold">Total: ${totalPrice.toLocaleString()}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
