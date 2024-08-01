// src/components/PortfolioModule.js
import React, { useEffect, useState } from 'react';
import Header from './Header';
import RiskScoreCard from './RiskScoreCard';
import AdditionalInfo from './AdditionalInfo';
import PortfolioAllocation from './PortfolioAllocation';
// import { FaQuestionCircle } from 'react-icons/fa'; // Uncomment if using react-icons

const PortfolioModule = () => {

  const [riskData, setRiskData] = useState(null); // State for the selected risk data
  const [allRiskData, setAllRiskData] = useState([
    { "riskScore": 0, "nigerianStocks": 18, "foreignStocks": 4, "techStocks": 2, "emergingStocks": 7, "nigerianBonds": 35, "foreignBonds": 15, "commodities": 7, "realEstate": 12, "tbills": 0, "alternative": 0 },
    { "riskScore": 1, "nigerianStocks": 20, "foreignStocks": 5, "techStocks": 3, "emergingStocks": 7, "nigerianBonds": 35, "foreignBonds": 6, "commodities": 12, "realEstate": 12, "tbills": 0, "alternative": 0 },
    { "riskScore": 2, "nigerianStocks": 23, "foreignStocks": 5, "techStocks": 4, "emergingStocks": 7, "nigerianBonds": 35, "foreignBonds": 14, "commodities": 12, "realEstate": 0, "tbills": 0, "alternative": 0 },
    { "riskScore": 3, "nigerianStocks": 26, "foreignStocks": 6, "techStocks": 4, "emergingStocks": 7, "nigerianBonds": 35, "foreignBonds": 10, "commodities": 12, "realEstate": 0, "tbills": 0, "alternative": 0 },
    { "riskScore": 4, "nigerianStocks": 29, "foreignStocks": 7, "techStocks": 5, "emergingStocks": 6, "nigerianBonds": 35, "foreignBonds": 6, "commodities": 12, "realEstate": 0, "tbills": 0, "alternative": 0 },
    { "riskScore": 5, "nigerianStocks": 31, "foreignStocks": 8, "techStocks": 6, "emergingStocks": 5, "nigerianBonds": 35, "foreignBonds": 3, "commodities": 12, "realEstate": 0, "tbills": 0, "alternative": 0 },
    { "riskScore": 6, "nigerianStocks": 35, "foreignStocks": 8, "techStocks": 7, "emergingStocks": 3, "nigerianBonds": 35, "foreignBonds": 12, "commodities": 0, "realEstate": 0, "tbills": 0, "alternative": 0 },
    { "riskScore": 7, "nigerianStocks": 45, "foreignStocks": 13, "techStocks": 12, "emergingStocks": 7, "nigerianBonds": 23, "foreignBonds": 0, "commodities": 0, "realEstate": 0, "tbills": 0, "alternative": 0 },
    { "riskScore": 8, "nigerianStocks": 45, "foreignStocks": 15, "techStocks": 15, "emergingStocks": 9, "nigerianBonds": 16, "foreignBonds": 0, "commodities": 0, "realEstate": 0, "tbills": 0, "alternative": 0 },
    { "riskScore": 9, "nigerianStocks": 45, "foreignStocks": 18, "techStocks": 17, "emergingStocks": 11, "nigerianBonds": 9, "foreignBonds": 0, "commodities": 0, "realEstate": 0, "tbills": 0, "alternative": 0 },
    { "riskScore": 10, "nigerianStocks": 45, "foreignStocks": 20, "techStocks": 19, "emergingStocks": 14, "nigerianBonds": 2, "foreignBonds": 0, "commodities": 0, "realEstate": 0, "tbills": 0, "alternative": 0 }
  ]); // State for all risk data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    console.log(baseUrl);

    // Fetch the risk data from the backend API
    // fetch(`${baseUrl}/portfolios`)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }

    //     // Check if the response is in JSON format
    //     const contentType = response.headers.get("content-type");
    //     if (!contentType || !contentType.includes("application/json")) {
    //       throw new TypeError("Received non-JSON response");
    //     }

    //     return response.json();
    //   })
    //   .then((data) => {
    //     if (Array.isArray(data) && data.length > 0) {
    //       setAllRiskData(data);
    //       setRiskData(data[0]); // Assuming you want to set the first item as the initial risk data
    //     } else {
    //       throw new Error("No data received or data format is incorrect");
    //     }
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //     setError(error.message);
    //     setLoading(false);
    //   });

    setRiskData(allRiskData[0]);
    console.log(allRiskData);
    setLoading(false);
  }, []);

  function riskToleranceHandler(riskScore) {
    const selectedRiskData = allRiskData.find(data => data.riskScore === riskScore);
    setRiskData(selectedRiskData);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-500 border-t-transparent"></div>
          <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2">
      <div className="relative flex w-full items-center justify-center bg-red-950 px-8 py-16">
        <Header riskToleranceHandler={riskToleranceHandler} />
        <RiskScoreCard riskData={riskData} />
      </div>
      <AdditionalInfo />
    </div>
  );
};

export default PortfolioModule;
