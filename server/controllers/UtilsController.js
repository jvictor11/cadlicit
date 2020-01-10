const states = require('../utils/state_city');

controller = {

    states: (req, res) => {
      return res.status(200).json(states);
    }

}

module.exports = controller;
