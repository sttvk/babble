import React, { useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";
import Messages from "./Messages";
import TextBox from "./TextBox";
import "../assets/styles/components/ChatWindow.css";

function ChatWindow() {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat-window">
      <div className="chat-window-container">
        <span>{data.user?.displayName}</span>
      </div>
      <Messages />
      <TextBox />
    </div>
  );
}

export default ChatWindow;
