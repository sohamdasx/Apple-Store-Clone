import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const gotToNewPage = () => {
    navigate("/products");
  };
  return (
    <div className="home-page">
      <div class="welcome">
        <h1>Welcome</h1>
      </div>
      <button onClick={() => gotToNewPage()} className="shop-btn" >
        <span class="text">View Products</span>
      </button>
    </div>
  );
};

export default HomePage;
