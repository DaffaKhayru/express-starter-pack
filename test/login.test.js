import testUtil from "./test-util";
import supertest from "supertest";
import app from "../src/index.js";
import { logger } from "../src/config/logger";

describe('POST /api/login', () => {
    beforeEach(async () => {
        await testUtil.createUser();
    });

    afterEach(async () => {
        await testUtil.deleteUser();
    })

    it('Should login if user request is valid', async () => {
        const resp = await supertest(app)
            .post('/api/login')
            .send({
                email: "daffakhayru@gmail.com",
                password: "daffa123"
            });

        logger.info(resp.body);

        expect(resp.status).toBe(200);
        expect(resp.body.msg).toBeDefined();
    });

    // it('Should not login if user request is invalid', () => {
        
    // });
    
})