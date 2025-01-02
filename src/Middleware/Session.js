import session from 'express-session';
import dotenv from 'dotenv';

dotenv.config(); // Memuat variabel dari file .env

export const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false,
    saveUninitialized: true,
});