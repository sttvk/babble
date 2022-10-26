import React from "react";
import "./Register.css";

function LogIn() {
  return (
    <div className="log-in">
      <div className="register-form-container">
        <span className="register-logo">Babble</span>
        <form className="register-form">
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
