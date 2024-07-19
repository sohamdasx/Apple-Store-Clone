import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import "../styles/ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  const purchaseProduct = async () => {
    if (user) {
      try {
        const response = await fetch("/api/products/purchase", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({ productId: product._id }),
        });

        if (response.ok) {
          const data = await response.json();
          // Handle success: show success message, update UI, etc.
          console.log("Purchase successful", data);
          alert("Purchase successful!");
          // Redirect or update state as necessary
        } else {
          // Handle errors: show error message, etc.
          const errorData = await response.json();
          console.error("Purchase failed:", errorData);
          alert(`Purchase failed: ${errorData.message}`);
        }
      } catch (error) {
        // Handle network errors or other unexpected errors
        console.error("An error occurred:", error);
        alert("An unexpected error occurred. Please try again later.");
      }
    } else {
      // Handle not logged in: show login prompt, redirect to login, etc.
      alert("You need to be logged in to make a purchase.");
      navigate("/login");
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
      <button onClick={purchaseProduct}>Purchase</button>
    </div>
  );
};

export default ProductPage;
