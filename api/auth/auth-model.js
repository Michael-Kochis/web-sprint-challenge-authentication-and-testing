const db = require('../../data/dbConfig');
const users = require('../users/user-model');

const register = (neoUser) => {
    users.add(neoUser);
}

module.exports = {
    register
}
