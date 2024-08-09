import React from 'react';
import chartData from '@data/sections/comparisonData.json'

const ComparisonChart = () => {
  return (
    <>
      {/* Full Width Image Section */}
      <div className="full-width-image__section gap-top-40">
        <div className="box">
          <h2 style={{ color: "#fff", padding: "12px" }}>Analysis of MyWater & Other Types of Water</h2>
          <div className="imgBx4">
            {chartData.map((chart, index) => (
              <img src={chart.imageUrl} alt={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparisonChart;