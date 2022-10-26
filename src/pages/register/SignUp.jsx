import React from "react";
import "./Register.css";
import addUser from "../../images/add-user.png";

function SignUp() {
  return (
    <div className="sign-up">
      <div className="register-form-container">
        <span className="register-logo">Babble</span>
        <form className="register-form">
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
        <p>Already have an account? Log in</p>
      </div>
    </div>
  );
}

export default SignUp;
