const bcrypt = require('bcryptjs');

const db = require('../../data/dbConfig');

const find = async () => {
    return await db("users");
}

const add = async (neoUser) => {
    const hash = bcrypt.hashSync(neoUser.password, 12);
    neoUser.password = hash;

    return await db("users")
        .insert(neoUser);
}

module.exports = {
    find,
    add
}
