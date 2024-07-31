const Portfolio = require('../models/Portfolio');
const { validatePortfolios } = require('../validation/portfolioValidation');

// Get all portfolios
exports.getPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.json(portfolios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new portfolio
exports.createPortfolio = async (req, res) => {
    const {
      riskScore, nigerianStocks, foreignStocks, techStocks, emergingStocks,
      nigerianBonds, foreignBonds, commodities, realEstate, tbills, alternative
    } = req.body;
  
    try {
      // Validate that all fields are present and that the weights add up to 100
      const totalWeight = nigerianStocks + foreignStocks + techStocks + emergingStocks +
                          nigerianBonds + foreignBonds + commodities + realEstate +
                          tbills + alternative;
  
      if (totalWeight !== 100) {
        return res.status(400).json({ message: 'The weights must add up to 100%' });
      }
  
      const newPortfolio = new Portfolio({
        riskScore, nigerianStocks, foreignStocks, techStocks, emergingStocks,
        nigerianBonds, foreignBonds, commodities, realEstate, tbills, alternative
      });
  
      await newPortfolio.save();
      res.status(201).json(newPortfolio);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
};

exports.insertManyPortfolios = async (req, res) => {
    const portfolios = req.body; // Get data from request body

    // Ensure that `portfolios` is an array
    if (!Array.isArray(portfolios)) {
        return res.status(400).json({ message: 'Invalid data format. Expected an array of portfolios.' });
    }

    // Validate the incoming data
    const errors = validatePortfolios(portfolios);

    if (errors.length > 0) {
        return res.status(400).json({ message: 'Validation errors', errors });
    }

    try {
        await Portfolio.insertMany(portfolios);
        res.status(200).send('Data inserted successfully');
    } catch (err) {
        res.status(500).send('Error inserting data');
        console.error('Error inserting data:', err);
    }
}