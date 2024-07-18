import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/ShopPage.css";

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="shop-page">
      <h1 className="shop-welcome">Welcome to Apple Store</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <Link to={`/products/${product._id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
