const users = require('./user-model');

const usernameAvailable = (req, res, next) => {
    const { username } = req.body;

    users.findByUsername(username)
        .then((resp) => {
            if (resp) {
                res.status(400).json({ message: "Username taken."});
            } else {
                next();
            }
        })
        .catch(next);
}

module.exports = {
    usernameAvailable
}
