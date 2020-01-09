const express = require('express');
const router = express.Router();
const BiddingController = require('../controllers/BiddingController');

router.get('/bidding/all', BiddingController.all);

module.exports = router;
