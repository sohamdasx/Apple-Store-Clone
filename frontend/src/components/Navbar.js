import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        Apple
      </Link>
      <div className="nav-links">
        <div>
          <Link to="/">Home</Link>
        </div>
        {user && (
          <div>
            <span>{user.username}</span>
            <button className="logout-btn" onClick={handleClick}>
              Log out
            </button>
          </div>
        )}
        {!user && (
          <>
            <div>
              <Link to="/login">Login</Link>
            </div>
            <div>
              <Link to="/signup">Signup</Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
