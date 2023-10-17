import React, { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import SignupComponent from "../components/SignupComponent";
import "../login.css";

const Authentication = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-button">
        <button
          className={showLogin ? "active" : "deactive"}
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
        <button
          className={showLogin ? "deactive" : "active"}
          onClick={() => setShowLogin(false)}
        >
          Sign Up
        </button>
      </div>
      <div className="auth-form">
        {showLogin ? <LoginComponent /> : <SignupComponent />}
      </div>
    </div>
  );
};

export default Authentication;