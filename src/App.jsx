import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/assets/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Error cargando JSON");
        return res.json();
      })
      .then((data) => {
        const mapped = data.map((item, index) => ({
          id: index + 1,
          name: item.titulo,
          description: item.descripcion,
          image: item.imagen,
          price: item.precio,
          discountPrice: Math.floor(item.precio * 0.8),
        }));
        setProducts(mapped);
      })
      .catch((err) => console.error(err));
  }, []);

  const addToCart = (product) => setCart([...cart, product]);

  const removeFromCart = (index) =>
    setCart(cart.filter((_, i) => i !== index));

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#2e2e2e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <h1 className="mb-4 text-center">Tienda Gamer</h1>

      <div className="col-md-8 mb-4">
        <ProductList products={products} addToCart={addToCart} />
      </div>

      <div className="col-md-8">
        <div
          className="p-3 rounded"
          style={{ backgroundColor: "#3c3c3c" }}
        >
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
