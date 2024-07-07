import React from 'react';
import logoData from '@data/sections/logoData2.json'; // Import the data from JSON file

const LogoSlider2 = () => {
  return (
    <div className="logoSlider" style={{background: "#214D9E"}}>
      <div className="logoSlideTrack">
        {logoData.map((logo, index) => (
          <div key={index} className="slide">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider2;
