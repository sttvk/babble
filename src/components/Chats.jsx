import React from "react";
import "../assets/styles/components/Chats.css";

function Chats() {
  return (
    <div className="chats">
      <div className="chat-container">
        <img
          src="https://images.pexels.com/photos/12712925/pexels-photo-12712925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Profile"
        />
        <div className="chat-info">
          <span>John Doe</span>
          <p>Hey John. How are you?</p>
        </div>
      </div>

      <div className="chat-container">
        <img
          src="https://images.pexels.com/photos/12712925/pexels-photo-12712925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Profile"
        />
        <div className="chat-info">
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
}

export default Chats;
