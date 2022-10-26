import React from "react";
import "./Register.css";
import addUser from "../../images/add-user.png";

function Register() {
  return (
    <div className="Register">
      <div className="form-container">
        <span className="logo">Babble</span>
        <span className="title">Register</span>
        <form>
          <input required type="text" placeholder="Name" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <input style={{ display: "none" }} required type="file" id="file" />
          <label htmlFor="file">
            <img src={addUser} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;
