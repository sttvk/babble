import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "../assets/styles/components/NavBar.css";
import { AuthContext } from "../context/AuthContext";

function NavBar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="nav-bar">
      <span className="nav-bar-logo">Babble</span>
      <div className="nav-bar-user">
        <img src={currentUser.photoURL} alt="Profile" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Log out</button>
      </div>
    </div>
  );
}

export default NavBar;
