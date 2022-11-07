import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "../assets/styles/components/NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <span className="nav-bar-logo">Babble</span>
      <div className="nav-bar-user">
        <img
          src="https://images.pexels.com/photos/12712925/pexels-photo-12712925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Profile"
        />
        <span>John</span>
        <button onClick={() => signOut(auth)}>Log out</button>
      </div>
    </div>
  );
}

export default NavBar;
