const db = require('../../data/dbConfig');
const auth = require('./auth-model');
const users = require('../users/user-model');

beforeAll( async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
})

beforeEach( async () => {
    await db("users").truncate();
    await db.seed.run();
})

afterAll( async () => {
    await db.destroy()
})

describe("Auth model tests", () => {
    it("[0] Auth model exists", () => {
        expect(auth).toBeDefined();
    })
    it("[1] Register creates a new user in the database", async () => {
        const start = await users.find();
    })
})