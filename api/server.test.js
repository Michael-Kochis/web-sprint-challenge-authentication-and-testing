const server = require('./server');
const webprod = require('supertest');

// Write your tests here
test('sanity', () => {
  expect(true).toBe(true);
})

describe("Server tests", () => {
  it("server exists and will run", () => {
    expect(server).toBeDefined();
  })
  it("Endpoint GET / returns a server message", async ()=> {
    const res = await webprod(server).get('/');
    const answer = res.body;

    expect(answer).toBeTruthy();
    expect(answer).toMatchObject({ message: 'Welcome to the Dad Jokes server.'});
  })
  it("Attempting to access an undefined endpoint gets a 404", async () => {
    const res = await webprod(server).get('/qwerty');
    const status = res.status;
    const answer = res.body;

    expect(status).toBe(404);
    expect(answer).toMatchObject({ message: "No such endpoint" })
  })
})
