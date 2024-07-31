// src/components/PortfolioModule.js
import React, { useEffect, useState } from 'react';
import Header from './Header';
import RiskScoreCard from './RiskScoreCard';
import AdditionalInfo from './AdditionalInfo';
import PortfolioAllocation from './PortfolioAllocation';
// import { FaQuestionCircle } from 'react-icons/fa'; // Uncomment if using react-icons

const PortfolioModule = () => {

  const [riskData, setRiskData] = useState(null); // State for the selected risk data
  const [allRiskData, setAllRiskData] = useState([]); // State for all risk data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    // Fetch the risk data from the backend API
    fetch(`${baseUrl}/portfolios`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Check if the response is in JSON format
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new TypeError("Received non-JSON response");
        }

        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setAllRiskData(data);
          setRiskData(data[0]); // Assuming you want to set the first item as the initial risk data
        } else {
          throw new Error("No data received or data format is incorrect");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
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
