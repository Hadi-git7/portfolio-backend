import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import router from './routes/contactRoutes.js';
import colors from 'colors'
import cors from 'cors'

import serviceRoutes from './routes/serviceRoutes.js'
import announcementRoutes from './routes/announcementRoutes.js'
import projectRoutes from './routes/projectRoutes.js'
import aboutRoutes from './routes/aboutRoutes.js'
dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

const app = express();


if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
}

//middle ware 
app.use(express.urlencoded({extended : false}))
app.use(cors())
app.use(express.static('uploads'));
app.use('/uploads', express.static('uploads'))

app.use('/api/contact', router);


// routes
app.use('/api/services',serviceRoutes)
app.use('/api/announcements',announcementRoutes)
app.use('/api/project', projectRoutes)
app.use('/api/about', aboutRoutes)

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`))
