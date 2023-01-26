import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import colors from 'colors'
import projectRoutes from './routes/projectRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js'
import announcementRoutes from './routes/announcementRoutes.js'


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

app.use('/api/project', projectRoutes);

app.use('/services',serviceRoutes)

app.use('/announcements',announcementRoutes)


app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`))