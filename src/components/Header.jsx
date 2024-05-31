import React, { useContext } from "react";
import { itemContext } from "../context/ItemContext";
import { FaCartShopping } from "react-icons/fa6";
import "./Header.css";
const Header = () => {
  const { itemsInCart, totalPrice } = useContext(itemContext);
  return (
    <div className="header">
      <h1 className="logo-brand">Book Nest</h1>
      <h3 className="total-price">Total Price: {totalPrice}</h3>

      <div className="cart-icon">
        <FaCartShopping className="cart-icon" />
        <div className="cart-items">{itemsInCart}</div>
      </div>
    </div>
  );
};

export default Header;
