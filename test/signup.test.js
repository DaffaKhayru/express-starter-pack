import supertest from 'supertest'
import app from '../src/index.js';
import testUtil from './test-util.js';
import { logger } from '../src/config/logger.js';

describe('POST /api/signup', () => {
    afterEach(async () => {
        await testUtil.deleteUser();
    });

    it("Should signup new user if user dont exist", async () => {
        const resp = await supertest(app)
            .post('/api/signup')
            .send({
                username: "daffakhayru",
                email: "daffakhayru@gmail.com",
                password: "daffa123"
            });

        expect(resp.status).toBe(200);
        expect(resp.body.msg).toBeDefined();
    });

    it("Should not signup new user if request body is invalid", async () => {
        const resp = await supertest(app)
            .post('/api/signup')
            .send({
                username: "",
                email: "",
                password: ""
            });

        expect(resp.status).toBe(400);
    });

    it("Should not signup new user if user already exist", async () => {
        await testUtil.createUser();
        
        const resp = await supertest(app)
            .post('/api/signup')
            .send({
                username: "daffakhayru",
                email: "daffakhayru@gmail.com",
                password: "daffa123"
            });
            
        expect(resp.status).toBe(400);
    });
});
