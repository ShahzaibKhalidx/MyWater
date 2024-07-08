import React, { useState } from 'react';
import { motion } from 'framer-motion';
import purificationData from '@data/sections/purificationData.json';

const PurificationProcess = () => {
  const [selected, setSelected] = useState(null);

  const radius = 150; // Adjust the radius for icon placement
  const centerImage = "/images/products/c.jpg"; // Adjust path to your central image

  return (
    <div className="purifyWrapper">
      <img src={centerImage} className="centerImage" alt="Central Purifier" />
      {purificationData.map((item, index) => {
        const angle = (index / purificationData.length) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <motion.div
            key={item.id}
            className="icon"
            style={{
              transform: `translate(${x}px, ${y}px)`
            }}
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            onMouseEnter={() => setSelected(item.id)}
            onMouseLeave={() => setSelected(null)}
          >
            <img src={item.icon} alt={`Icon ${item.id}`} />
            {selected === item.id && (
              <motion.div className="tooltip" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                {item.text}
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default PurificationProcess;
