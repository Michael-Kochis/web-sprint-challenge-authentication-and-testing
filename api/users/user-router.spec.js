const db = require('../../data/dbConfig');
const server = require('../server');
const response = require('supertest');

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

describe("User router tests", () => {
    const input = {
        username: "Neo",
        password: "IKnowKungFu"
    }
    it("[1] delete endpoint removes requested user", async () => {
        await response(server).post("/api/auth/register")
            .send(input);
        const start = await response(server).get("/api/users");
        await response(server).delete("/api/users/1");
        const result = await response(server).get("/api/users");
        console.log("start: ", start);
        console.log("result: ", result);
        
        expect(result.length).toBe(start.length -1);
    })
})
