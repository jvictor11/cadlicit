const UserModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const constant = require('../utils/consts');
const jwt = require('jsonwebtoken');

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
      const password = req.body.password;
      const email = req.body.email;

      UserModel.findOne({email: email}).lean().exec((error, user) => {
        if (error) {
          return res.status(404).json({message: 'Usuário ou senha inexistente', error: error});
        } else {
          const auth_error = (password === '' || password === null || !user);

          if (!auth_error) {
             if (bcrypt.compareSync(password, user.password)) {
              const token = jwt.sign({ _id: user._id }, constant.JWTKEY, { expiresIn: constant.EXPIRESJWT });
              delete user.password
              res.status(200).json({ ...user, token: token });
             } else {
                return res.status(404).json({message: 'Usuário ou senha inexistente'});
             }
          } else {
            return res.status(404).json({message: 'Usuário ou senha inexistente'});
          }
        }
      });
    }
}
