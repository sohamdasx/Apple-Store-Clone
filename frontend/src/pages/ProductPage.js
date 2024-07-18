import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import "../styles/ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  const purchaseProduct = async () => {
    if (user) {
      await axios.post(
        "/api/products/purchase",
        { productId: product._id },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      // handle success message or redirect
    } else {
      // handle not logged in
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={purchaseProduct}>Purchase</button>
    </div>
  );
};

export default ProductPage;
