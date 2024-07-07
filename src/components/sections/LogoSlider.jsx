import React from 'react';
import logoData from '@data/sections/logoData.json'; // Import the data from JSON file

const LogoSlider = () => {
  return (
    <div className="logoSlider gap-bottom-20">
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

export default LogoSlider;
