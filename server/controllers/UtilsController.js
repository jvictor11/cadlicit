const states = require('../utils/state_city');
const numbExt = require('extenso');

controller = {

    states: (req, res) => {
      return res.status(200).json(states);
    },

    extensive: (req, res) => {
      const number = new numbExt(req.body.numb, { number: { decimal: 'formal' }, mode: 'currency' });
      return res.status(200).json({number});
    }

}

module.exports = controller;
