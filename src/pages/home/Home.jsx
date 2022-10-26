import React from "react";
import "./Home.css";
import SideBar from "../../components/side-bar/SideBar";
import Chat from "../../components/chat-window/ChatWindow";

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
