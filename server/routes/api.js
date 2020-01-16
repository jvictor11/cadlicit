const express = require('express');
const router = express.Router();
const BiddingController = require('../controllers/BiddingController');
const CompanyController = require('../controllers/CompanyController');
const UtilsController = require('../controllers/UtilsController');
const BidAnalysisController = require('../controllers/BidAnalysisController');

// Rotas Licitação

  //GET
  router.get('/bidding/all', BiddingController.all);
  router.get('/bidding/analysis/all', BidAnalysisController.all);

  //POST
  router.post('/bidding/analysis', BidAnalysisController.insert);

// Rotas Empresa

  router.get('/company/all', CompanyController.all);

// Rotas Utils

  router.get('/utils/states', UtilsController.states);
  router.post('/utils/extensive', UtilsController.extensive);

module.exports = router;
