import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card h-100 text-dark" style={{ display: "inline-block", margin: "1rem" }}>
      <img
        src={product.image}
        alt={product.name}
        className="d-block"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">
          <span className="text-decoration-line-through text-muted me-2">
            ${product.price.toLocaleString()}
          </span>
          <span className="fw-bold">${product.discountPrice.toLocaleString()}</span>
        </p>
        <button
          className="btn btn-primary w-100"
          onClick={() => addToCart(product)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
