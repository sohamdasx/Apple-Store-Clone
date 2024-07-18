import React, { createContext, useReducer, useEffect } from "react";

export const ProductContext = createContext();

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, { products: [] });

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const data = await response.json();
      dispatch({ type: "SET_PRODUCTS", payload: data });
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};