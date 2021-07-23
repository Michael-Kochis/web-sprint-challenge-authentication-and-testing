const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('../../config/secrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const secret = TOKEN_SECRET;

  if (token) {
      jwt.verify(token, secret, (err, decoded) => {
          if (err) {
              res.status(401).json({ message: "auth token corrupted or expired"})
          } else {
              req.decoded = decoded;
              next();
          }
      })
  } else { 
      res.status(401).json({ message: "improper or expired auth token"})
  }
}
