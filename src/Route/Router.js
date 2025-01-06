import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { swaggerDefinition } from './../../helpers/Documentation.js';
import UserController from './../Controllers/UserController.js';
import { googleLogin, googleCallback } from './../Controllers/AuthController.js';
import { getSalesPerMonth } from './../Controllers/SalesController.js';

const router = express.Router();
const swaggerDocs = swaggerJsDoc(swaggerDefinition);

// Example Home Route (optional)
router.get('/', (req, res) => res.send('Welcome to the API'));

// User Routes
router.get('/users', UserController.getUsers); // GET users
router.post('/user/create', UserController.createUser); // POST user

// Swagger Documentation
router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Example Hello API
router.get('/api/hello', (req, res) => res.send('Hello Next'));

// Sales
router.get('/api/sales/:year/:month', getSalesPerMonth);
// Google Auth
router.get('/auth/google', googleLogin);
router.get('/auth/google/callback', googleCallback);

export default router;
