const BiddingModel = require('../models/BiddingModel');

const controller = {

    all: (req, res, userEmail) => {
      BiddingModel.find({}).lean().exec((error, biddings) => {

        if (error) {
          return res.status(404).json({
            error: error,
            message: 'Não foi possível localizar os dados'
          });
        }

        return res.status(200).json(biddings);

      });
    },

    insert: () => {

    },

    update: () => {

    },

    delete: () => {

    }

}

module.exports = controller;
