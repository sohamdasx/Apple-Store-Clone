import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    navigate("/");
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={isLoading}>Log in</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default LoginPage;
