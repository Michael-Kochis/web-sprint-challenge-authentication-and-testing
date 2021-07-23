const db = require('../../data/dbConfig');

const find = async () => {
    return await db("users");
}

module.exports = {
    find
}
