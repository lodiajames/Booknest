import React, { useContext, useEffect, useState } from "react";
import { itemContext } from "../context/ItemContext";
import ProductItem from "./ProductItem";
import "./ProductList.css";

const ProductList = () => {
  const { products } = useContext(itemContext);
  const [sortedProducts, setSortedProducts] = useState([...products]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000);
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    setSortedProducts([...products]);
  }, [products]);

  const handleSortByPrice = () => {
    const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
  };

  const handleFilterByPriceRange = () => {
    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setSortedProducts(filtered);
  };

  const handleFilterByType = () => {
    if (selectedType === "All") {
      setSortedProducts([...products]);
    } else {
      const filtered = products.filter(
        (product) => product.genre === selectedType
      );
      setSortedProducts(filtered);
    }
  };

  return (
    <div className="product-list">
      <h2 className="book-list-title">Book List</h2>
      <div className="filter-container">
        <button className="sort-btn" onClick={handleSortByPrice}>
          Sort by Price
        </button>
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </label>
        <button className="filter-btn" onClick={handleFilterByPriceRange}>
          Filter by Price Range
        </button>
        <label>
          Filter by Type:
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Fiction">Fiction</option>
            <option value="Dystopian">Dystopian</option>
            <option value="Novel">Novel</option>
          </select>
        </label>
        <button className="filter-btn" onClick={handleFilterByType}>
          Filter by Type
        </button>
      </div>
      <ul className="product-card-container">
        {sortedProducts.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </ul>
      <div className="buy-now-btn">Buy Now</div>
    </div>
  );
};

export default ProductList;
