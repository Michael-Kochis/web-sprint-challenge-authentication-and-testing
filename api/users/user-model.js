const bcrypt = require('bcryptjs');

const db = require('../../data/dbConfig');

const find = async () => {
    return await db("users");
}

const findByID = async (id) => {
    return await db("users")
        .where({id})
        .first();
}

const add = async (neoUser) => {
    const hash = bcrypt.hashSync(neoUser.password, 12);
    neoUser.password = hash;

    const id = await db("users")
        .insert(neoUser);
    return await findByID(id);
}

module.exports = {
    find,
    findByID,
    add
}
