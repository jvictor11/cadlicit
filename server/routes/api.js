const express = require('express');
const router = express.Router();
const BiddingController = require('../controllers/BiddingController');
const CompanyController = require('../controllers/CompanyController');
const UtilsController = require('../controllers/UtilsController');

// Rotas Licitação

router.get('/bidding/all', BiddingController.all);

// Rotas Empresa

router.get('/company/all', CompanyController.all);

// Rotas Utils

router.get('/utils/states', UtilsController.states);
router.post('/utils/extensive', UtilsController.extensive);

module.exports = router;
