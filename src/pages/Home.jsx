import React from "react";
import "../assets/styles/pages/Home.css";
import SideBar from "../components/SideBar";
import Chat from "../components/ChatWindow";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
