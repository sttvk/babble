import React from "react";
import "../assets/styles/pages/AuthCard.css";

function LogIn() {
  return (
    <div className="log-in">
      <div className="AuthCard-form-container">
        <span className="AuthCard-logo">Babble</span>
        <form className="AuthCard-form">
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <button>Log in</button>
        </form>
        <p>Don't have an account? Sign up</p>
      </div>
    </div>
  );
}

export default LogIn;
