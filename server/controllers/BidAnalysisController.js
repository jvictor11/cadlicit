const BidAnalysisModel = require('../models/BidAnalysisModel');

const controller = {

    all: (req, res) => {
      BidAnalysisModel.find({}).lean().exec((error, analysis) => {

        if (error) {
          return res.status(404).json({
            error: error,
            message: 'Não foi possível localizar os dados'
          });
        }

        return res.status(200).json(analysis);

      });
    },

    insert: async (req, res) => {
        try {
          const bid = await BidAnalysisModel.findOne({silt: req.body.silt});
          if (!bid) {
            const analysis = new BidAnalysisModel(req.body);
            await analysis.save();
            res.status(200).json(analysis);
          } else {
            res.status(403).json({
              message: 'Análise Já Cadastrada',
              error: error
            })
          }
        } catch (error) {
          res.status(500).json({
            message: 'Erro ao Registrar Análise',
            error: error
          })
        }

      },

    update: () => {

    },

    delete: () => {

    }

}

module.exports = controller;
