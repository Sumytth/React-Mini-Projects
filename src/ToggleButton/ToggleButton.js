import React from 'react';
import { useState } from 'react';
import "./toggle.css"

function ToggleButton() {

  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [btnColor, setBtnColor] = useState("white");

  const handleClick = () => {
    setBgColor(bgColor === "white" ? "black" : "white");
    setTextColor(textColor === "black" ? "yellow" : "black");
    setBtnColor(btnColor === "white" ? "black" : "white");
  }

  return (
    <section className="box" style={{ backgroundColor: bgColor, color: textColor }}>
      <button className="btn" onClick={handleClick} style={{
        backgroundColor: btnColor,
        color: textColor,
        border: `2px solid ${textColor}`,
      }}>

        {bgColor === "white" ? "Black Theme" : "White Theme"}
          
      </button>
      <h1>WELCOME TO THE Mighty <br/>Testing Project </h1>
    </section>
  );
}

export default ToggleButton;
