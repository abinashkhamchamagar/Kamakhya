import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import config from './config/config.js';
import connectDB from './config/database.js';
import productRoute from './routes/product.routes.js'
import logger from './middlewares/logger.js';

dotenv.config();
connectDB();

const app = express();
app.use(logger);


app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  response.send("home page");
});

app.use("/products", productRoute)

app.use((request, response) => {
  response.status(404).send({ error: 'Not Found' });
});

app.listen(config.port, () => {
  console.log(`Server is running at http://localhost:${config.port}`);
});
