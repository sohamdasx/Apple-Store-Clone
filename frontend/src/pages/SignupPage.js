import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import "../styles/SignupPage.css";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, email, password);
    if (username && password) {
      if (!isLoading && !error) {
        navigate("/");
      }
    }
  };

  return (
    <div className="signup-page">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <div className="form-inputs">
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="signup-btn" disabled={isLoading}>
            Sign up
          </button>
          {error && <div className="error">{error}</div>}
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
