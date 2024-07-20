import React from 'react';
import chartData from '@data/sections/comparisonData.json'

const ComparisonChart = () => {
  return (
    <>
      {/* Full Width Image Section */}
      <section className="full-width-image__section">
        <div className="box">
          <div className="imgBx4">
            {chartData.map((chart, index) => (
              <img src={chart.imageUrl} alt={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ComparisonChart;