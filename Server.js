import express from 'express';
import dotenv from 'dotenv';
import router from './src/Route/Router.js';
import { sequelize } from './src/Models/Index.js'; 
import { RequestLog, RespondLog } from './src/Middleware/Access.js';

// Load environment variables
dotenv.config();

// Initialize App and Port
const app = express();
const PORT = process.env.PORT || 3001;

//Logger
app.use(RequestLog);
app.use(RespondLog);

// Middleware to parse JSON
app.use(express.json());

// Use Router
app.use('/', router);

sequelize
    .authenticate()
    .then(() => {
        console.log('Database connected successfully!');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

    
// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
