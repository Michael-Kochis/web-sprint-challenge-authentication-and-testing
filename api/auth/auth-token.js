const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('../../config/secrets');

const generateToken = (user) => {
    const payload = {
        id: user.userID,
        username: user.username
    }
    const secret = TOKEN_SECRET;
    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secret, options);
}

module.exports = {
    generateToken
}