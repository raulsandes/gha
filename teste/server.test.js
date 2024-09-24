const request = require('supertest');
const app = require('../server');
let server;

beforeAll(() => {
  server = app.listen(4000);  // Você pode iniciar o servidor
});

afterAll((done) => {
  server.close(done);  // Encerra o servidor após os testes
});

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
