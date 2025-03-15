import express from 'express';
import { logger } from './config/logger.js';
import authRoute from './routes/auth-route.js';

const app = express();

app.use(express.json());

app.use('/api', authRoute.router);

app.listen(3000, () => {
    logger.info("Server running at port http://localhost:3000")
});