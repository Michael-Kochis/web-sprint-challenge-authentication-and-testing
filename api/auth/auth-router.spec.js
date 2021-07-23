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


describe("Auth router tests", () => {
    const input = {
        username: "Tron",
        password: "IgotUDisk"
    }

    it("[1] register endpoint does not respond with 404", async () => {
        const answer = await response(server).post("/api/auth/register")
            .send(input);

        expect(answer.status).not.toBe(404);
    })
    it("[2] register responds with the newly created user", async () => {
        const answer = await response(server).post("/api/auth/register")
            .send(input);

        //expect(answer.status).toBe(201);
        expect(answer.body).toMatchObject({
            id: 1,
            username: "Tron"
        })
    })
})