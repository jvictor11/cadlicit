const UserModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const constant = require('../utils/consts');

module.exports = {
    register: async (req, res) => {
      try {
        const u = await UserModel.findOne({email: req.body.email});
        if (!u) {
          const user = new UserModel(req.body);
          user.password = bcrypt.hashSync(req.body.password, constant.BCRYPTSALTS)
          await user.save();
          user.password = null;
          res.status(200).json(user);
        } else {
          res.status(403).json({
            message: 'Email já cadastrado',
            error: error
          })
        }
      } catch (error) {
        res.status(500).json({
          message: 'Erro ao registrar o usuário',
          error: error
        })
      }

    },

    login: (req, res) => {

    }
}
