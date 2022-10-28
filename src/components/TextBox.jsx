import React from "react";
import "../assets/styles/components/TextBox.css";
import AddFile from "../assets/images/add-file.png";

function TextBox() {
  return (
    <div className="text-box">
      <div className="text-box-input-container">
        <input type="text" placeholder="Type something..."></input>
      </div>
      <div className="text-box-btn-container">
        <label htmlFor="file">
          <img src={AddFile} alt="Add" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}

export default TextBox;
