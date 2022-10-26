import React from "react";
import "./LogIn.css";

function LogIn() {
  return (
    <div className="LogIn">
      <div className="form-container">
        <span className="logo">Babble</span>
        <form>
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
