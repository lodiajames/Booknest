import React, { createContext, useEffect, useState } from "react";

const itemContext = createContext();

const CustomItemContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://backendecom-yqll.onrender.com/api/books"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const products = await response.json();
        console.log(products);
        setProducts(products);
      } catch (error) {
        console.log("Failed to fetch products", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    setTotalPrice((prevTotal) => prevTotal + product.price);
    setCart((prevCart) => [...prevCart, product]);
    setItemsInCart((prevCount) => prevCount + 1);
  };

  const removeFromCart = (product) => {
    const index = cart.findIndex((prdt) => prdt._id === product._id);
    console.log(index);

    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setTotalPrice((prevTotalPrice) => {
        const newTotalPrice = prevTotalPrice - cart[index].price;
        return newTotalPrice >= 0 ? newTotalPrice : 0;
      });
      setItemsInCart((prevItemsInCart) => {
        const newItemsInCart = prevItemsInCart - 1;
        return newItemsInCart >= 0 ? newItemsInCart : 0;
      });
      setCart(updatedCart);
    }
  };

  return (
    <itemContext.Provider
      value={{ products, addToCart, removeFromCart, itemsInCart, totalPrice }}
    >
      {children}
    </itemContext.Provider>
  );
};

export { itemContext };
export default CustomItemContext;
