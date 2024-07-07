import React from 'react';
import chartData from '@data/sections/comparisonData.json'

const ComparisonChart = () => {
  return (
    <>
      {/* Full Width Image Section */}
      <section className="full-width-image__section">
        {chartData.map((chart, index) => (
          <img src={chart.imageUrl} alt={index} />
        ))}
      </section>
    </>
  );
};

export default ComparisonChart;