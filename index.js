import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import router from './routes/goalContact.js';

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/contact', router);

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}!!!`)
})
