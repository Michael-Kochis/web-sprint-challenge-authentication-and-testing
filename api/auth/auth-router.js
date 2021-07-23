const bcrypt = require('bcryptjs');
const router = require('express').Router();
const users = require('../users/user-model');
const { generateToken } = require('./auth-token');
const { usernameAvailable } = require('../users/user-middleware');
const { verifyUserInputs } = require('./auth-middleware');

router.post('/register', [verifyUserInputs, usernameAvailable], (req, res, next) => {
  const neoUser = req.body;

  users.add(neoUser)
      .then((resp) => {
        res.status(201).json(resp);
      }).catch(next);
});

router.post('/login', [verifyUserInputs],(req, res, next) => {
  const { username, password } = req.body;

  users.findByUsername(username)
    .then((user) => {
      if (!user) {
        res.status(422).json({ message: "invalid credentials" });
      } else { 
        if (bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);

            res.status(200).json({ 
              message: `welcome, ${user.username}`, 
              token 
            })
        } else {
            res.status(500).json({ message: "invalid credentials" })
        }
      }
    }).catch(next);
});

module.exports = router;
