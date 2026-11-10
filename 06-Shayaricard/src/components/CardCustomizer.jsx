import React, { useRef, useState } from "react";
import DownloadButton from "./DownloadButton";

const CardCustomizer = ({ poem }) => {
  const cardRef = useRef(null);

  const [background, setBackground] = useState("#e8d8b8");
  const [font, setFont] = useState("Georgia");
  const [fontSize, setFontSize] = useState("28px");

  return (
    <div className="card-page">

      <div className="card-editor">

        {/* Controls */}
        <div className="customizer-controls">

          <h2>Customize</h2>

          <label>Paper</label>
          <select
            value={background}
            onChange={(e) => setBackground(e.target.value)}
          >
            <option value="#e8d8b8">Old Paper</option>
            <option value="#f3ead8">Cream</option>
            <option value="#d8c29d">Vintage</option>
            <option value="#252525">Dark</option>
          </select>

          <label>Font</label>
          <select
            value={font}
            onChange={(e) => setFont(e.target.value)}
          >
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="serif">Serif</option>
          </select>

          <label>Text Size</label>
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          >
            <option value="20px">Small</option>
            <option value="28px">Medium</option>
            <option value="36px">Large</option>
            <option value="44px">Extra Large</option>
          </select>

        </div>


        {/* Card */}
        <div
          ref={cardRef}
          className="dil-e-noor-postcard"
          style={{
            backgroundColor: background,
            fontFamily: font,
          }}
        >

          <div className="postcard-brand">
            DIL-E-NOOR
          </div>

          <div className="postcard-tagline">
            poetry that stays...
          </div>

          <div className="postcard-divider"></div>

          <div
            className="postcard-poetry"
            style={{ fontSize }}
          >
            <p>{poem.text}</p>

            <span>— {poem.poet}</span>
          </div>

          <div className="postcard-decoration">
            ❦
          </div>

        </div>

      </div>

      <DownloadButton cardRef={cardRef} />

    </div>
  );
};

export default CardCustomizer;