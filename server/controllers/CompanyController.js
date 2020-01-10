const CompanyModel = require('../models/CompanyModel');

const controller = {

    all: (req, res) => {
      CompanyModel.find({}).lean().exec((error, companies) => {

        if (error) {
          return res.status(404).json({
            error: error,
            message: 'Não foi possível localizar os dados'
          });
        }

        return res.status(200).json(companies);

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