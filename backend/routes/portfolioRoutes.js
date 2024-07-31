const express = require('express');
const { getPortfolios, createPortfolio, insertManyPortfolios } = require('../controllers/portfolioController');

const router = express.Router();

router.route('/')
    .get(getPortfolios)
    .post(createPortfolio);

router.route('/insert-many').post(insertManyPortfolios);

module.exports = router;
