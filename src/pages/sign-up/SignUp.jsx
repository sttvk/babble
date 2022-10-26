import React from "react";
import "./SignUp.css";
import addUser from "../../images/add-user.png";

function SignUp() {
  return (
    <div className="SignUp">
      <div className="form-container">
        <span className="logo">Babble</span>
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
        <p>Already have an account? Log in</p>
      </div>
    </div>
  );
}

export default SignUp;
