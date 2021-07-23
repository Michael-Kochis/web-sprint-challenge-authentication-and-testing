const db = require('../../data/dbConfig');
const users = require('./user-model');

beforeAll( async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
})

describe("User model tests", () => {
    const input = {
        username: "Rex",
        password: "ShootDroids"
    }
    it("[0] users-model exists", () => {
        expect(users).toBeDefined();
    })
    it("users add actually adds a user to the database", async () => {
        const start = await users.find();
        await users.add(input);
        const answer = await users.find();

        console.log(start);
        expect(answer.length).toBe(start.length + 1);
    })
})