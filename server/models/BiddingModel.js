const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BiddingSchema = new Schema({

    name: String

});

module.exports = mongoose.model('Bidding', BiddingSchema);
