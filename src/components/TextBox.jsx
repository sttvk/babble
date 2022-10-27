import React from "react";
import "../assets/styles/components/TextBox.css";
import AddFile from "../assets/images/add-file.png";

function TextBox() {
  return (
    <div className="text-box">
      <input type="text" placeholder="Type something..."></input>
      <div className="send">
        <label htmlFor="file">
          <img src={AddFile} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}

export default TextBox;
