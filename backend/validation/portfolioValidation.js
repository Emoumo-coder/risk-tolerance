const Joi = require('joi');

// Define the schema for validating portfolio data
const portfolioSchema = Joi.object({
    riskScore: Joi.number().integer().min(0).max(10).required(),
    nigerianStocks: Joi.number().min(0).max(100).required(),
    foreignStocks: Joi.number().min(0).max(100).required(),
    techStocks: Joi.number().min(0).max(100).required(),
    emergingStocks: Joi.number().min(0).max(100).required(),
    nigerianBonds: Joi.number().min(0).max(100).required(),
    foreignBonds: Joi.number().min(0).max(100).required(),
    commodities: Joi.number().min(0).max(100).required(),
    realEstate: Joi.number().min(0).max(100).required(),
    tbills: Joi.number().min(0).max(100).required(),
    alternative: Joi.number().min(0).max(100).required(),
});

// Validate the data against the schema
const validatePortfolios = (portfolios) => {
    return portfolios.map(portfolio => {
        const { error } = portfolioSchema.validate(portfolio);
        return error ? error.details[0].message : null;
    }).filter(err => err);
};

module.exports = { validatePortfolios };
