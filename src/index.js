import express from 'express';
import { logger } from './config/logger.js';
import authRoute from './routes/auth-route.js';
import { errorMiddleware } from './middleware/error-middleware.js';

const app = express();

app.use(express.json());

app.use(authRoute.router);

app.use(errorMiddleware);

app.listen(3000, () => {
    logger.info("Server running at port http://localhost:3000")
});