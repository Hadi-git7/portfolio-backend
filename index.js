import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import colors from 'colors'
import serviceRoutes from './routes/serviceRoutes.js'
import announcementRoutes from './routes/announcementRoutes.js'
import projectRoutes from './routes/projectRoutes.js'
dotenv.config();

await connectDB();

const PORT = process.env.PORT || 5000;

const app = new express();

if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
}

//middle ware 
app.use(express.json());
app.use(express.urlencoded({extended : false}))

// routes
app.use('/api/services',serviceRoutes)
app.use('/api/announcements',announcementRoutes)
app.use('/api/project', projectRoutes)

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`))