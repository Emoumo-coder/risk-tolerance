import React from "react";

const PortfolioAllocation = () => {
    return (
        <div className="grid grid-cols-2 justify-between gap-x-4 text-steel xl:grid-cols-3 text-white">
            <div className="col-span-1 flex justify-between space-x-2">
              <div>Real Estate</div>
              <div>0%</div>
            </div>
            <div className="col-span-1 flex justify-between space-x-2">
              <div>US Bonds</div>
              <div>0%</div>
            </div>
            <div className="col-span-1 flex justify-between space-x-2">
              <div>Corporate Bonds</div>
              <div>0%</div>
            </div>
            <div className="col-span-1 flex justify-between space-x-2">
              <div>TIPS</div>
              <div>0%</div>
            </div>
            <div className="col-span-1 flex justify-between space-x-2">
              <div>Emerging Markets Bonds</div>
              <div>0%</div>
            </div>
          </div>
    );
}

export default PortfolioAllocation;