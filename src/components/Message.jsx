import React from "react";
import "../assets/styles/components/Message.css";

function Message() {
  return (
    <div className="message owner">
      <div className="message-info">
        <img
          src="https://images.pexels.com/photos/12712925/pexels-photo-12712925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Profile"
        />
        <span>Just Now</span>
      </div>
      <div className="message-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius provident laborum et, quibusdam at autem, odit ipsam amet sequi doloribus repellendus voluptatem voluptates eos eum magnam eveniet dolore minus maiores.</p>
      </div>
    </div>
  );
}

export default Message;
