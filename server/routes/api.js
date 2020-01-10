const express = require('express');
const router = express.Router();
const BiddingController = require('../controllers/BiddingController');
const CompanyController = require('../controllers/CompanyController');

// Rotas Licitação

router.get('/bidding/all', BiddingController.all);

// Rotas Empresa

router.get('/company/all', CompanyController.all);

module.exports = router;
