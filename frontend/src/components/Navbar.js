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
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/profile">{user.name}</Link>
            </li>
            <li>
              <span>{user.username}</span>
              <button onClick={handleClick}>Log out</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
