import React from "react";
import "./SideBar.css";
import NavBar from "../nav-bar/NavBar";
import SearchBox from "../search-box/SearchBox";
import Chats from "../chats/Chats";

function SideBar() {
  return (
    <div className="side-bar">
      <NavBar />
      <SearchBox />
      <Chats />
    </div>
  );
}

export default SideBar;
