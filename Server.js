import express from 'express';
import dotenv from 'dotenv';
import router from './src/Route/Router.js';
import { sequelize } from './src/Models/Index.js'; 
import { RequestLog, RespondLog } from './src/Middleware/Access.js';
import { sessionMiddleware } from './src/Middleware/Session.js';
import passport from 'passport'

// Load environment variables
dotenv.config();

// Initialize App and Port
const app = express();
const PORT = process.env.PORT || 3001;
const APP_HOST = process.env.APP_HOST;

//Logger
app.use(RequestLog);
app.use(RespondLog);
app.use(sessionMiddleware);

// Middleware to parse each request to JSON
app.use(express.json());

// Use Router as endpoint of route
app.use('/', router);

// testing connection to the database
sequelize
    .authenticate()
    .then(() => {
        console.log('Database connected successfully!');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

    
// Start Server (Starting server)
app.listen(PORT, APP_HOST, () => {
    console.log(`Server running at http://${APP_HOST}:${PORT}`);
});
