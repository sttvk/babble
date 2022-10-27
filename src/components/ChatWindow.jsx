import React from "react";
import "../assets/styles/components/ChatWindow.css";
import Messages from "./Messages";
import TextBox from "./TextBox";

function ChatWindow() {
  return (
    <div className="chat-window">
      <div className="chat-window-container">
        <img
          src="https://images.pexels.com/photos/12712925/pexels-photo-12712925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Profile"
        />
        <span>John</span>
      </div>
      <Messages />
      <TextBox />
    </div>
  );
}

export default ChatWindow;
