const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  riskScore: { type: Number, required: true },
  nigerianStocks: { type: Number, required: true },
  foreignStocks: { type: Number, required: true },
  techStocks: { type: Number, required: true },
  emergingStocks: { type: Number, required: true },
  nigerianBonds: { type: Number, required: true },
  foreignBonds: { type: Number, required: true },
  commodities: { type: Number, required: true },
  realEstate: { type: Number, required: true },
  tbills: { type: Number, required: true },
  alternative: { type: Number, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);