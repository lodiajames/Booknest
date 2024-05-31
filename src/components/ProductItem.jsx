import React, { useContext } from "react";
import { itemContext } from "../context/ItemContext";
import { FaMinus } from "react-icons/fa6";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import "./ProductItem.css"; // Import the CSS file

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(itemContext);

  const handleAddToCart = (product) => {
    console.log(product);
    addToCart(product);
  };

  const handleRemoToCart = (product) => {
    console.log("product removed", product);
    removeFromCart(product);
  };
  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />

      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: {product.price}</p>
        <p className="product-genre">{product.genre}</p>
        <p className="product-author">{product.author}</p>

        <div className="product-actions">
          <button
            className="add-to-cart"
            onClick={() => handleAddToCart(product)}
          >
            <MdOutlineAddShoppingCart />
            Add to Cart
          </button>
          <button
            className="remove-from-cart"
            onClick={() => handleRemoToCart(product)}
          >
            <FaMinus />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
