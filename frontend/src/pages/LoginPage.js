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
    const result = await login(username, password);
    if (username && password) {
      if (result && !error) {
        navigate("/");
      }
      if (!isLoading && !error) {
        navigate("/");
      }
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-inputs">
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" disabled={isLoading}>
            Log in
          </button>
          {error && <div className="error">{error}</div>}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
