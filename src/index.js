import express from 'express';
import { logger } from './config/logger';

const app = express();

app.use(express.json());

app.listen(3000, () => {
    logger.info("Server running at port http://localhost:3000")
});