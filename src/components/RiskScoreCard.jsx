import React from 'react';
import PortfolioAllocation from './PortfolioAllocation';

const RiskScoreCard = ({ riskData }) => {
  const riskCategories = [
    { name: "Nigerian Stocks", percentage: riskData.nigerianStocks },
    { name: "Foreign Stocks", percentage: riskData.foreignStocks },
    { name: "Tech Stocks", percentage: riskData.techStocks },
    { name: "Emerging Stocks", percentage: riskData.emergingStocks },
    { name: "Nigerian Bonds", percentage: riskData.nigerianBonds },
    { name: "Foreign Bonds", percentage: riskData.foreignBonds },
    { name: "Commodities", percentage: riskData.commodities },
    { name: "Real Estate", percentage: riskData.realEstate },
    { name: "T-Bills", percentage: riskData.tbills },
    { name: "Alternative", percentage: riskData.alternative },
  ];

  return (
    <div aria-atomic="true" aria-live="polite" className="w-full max-w-[683px] space-y-4">
      <div className="grid grid-cols-12 text-white">
        {riskCategories.map((category, index) => (
          <RiskCategory key={index} name={category.name} percentage={category.percentage} />
        ))}
      </div>
      <PortfolioAllocation />
    </div>
  );
};

const RiskCategory = ({ name, percentage }) => {
  // Calculate color based on percentage (optional)
  const backgroundColor = 'rgb(72, 64, 187)';

  return (
    <>
      <div className="col-span-5 flex items-center pr-4 md:col-span-4">
        <span className="truncate overflow-ellipsis">{name}</span>
        <button className="ml-2" aria-label={`Open ${name} dialog`} type="button">
          {/* <FaQuestionCircle /> */} {/* Uncomment if using react-icons, but i am using. */}
        </button>
      </div>
      <div className="col-span-7 -mb-px md:col-span-8">
        <div 
          className="w-8 min-w-[64px] border border-lavender px-4 py-2 text-white transition" 
          style={{ width: `calc(((${percentage} / 100) * 100%))`, backgroundColor }}
        >
          {percentage}%
        </div>
      </div>
    </>
  );
};

export default RiskScoreCard;
