// server.js or app.js (your main server file)
import express from 'express';
import dotenv from "dotenv"
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import clientRoutes from './routes/clientRoutes.js'
import connectDB from './config/db.js';

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use((req, res, next) => {
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });

app.use(cookieParser());

// Other middleware and routes
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/admin', userRoutes);
app.use('/api/clients', clientRoutes)

// Not Found Middleware
app.use(notFound);

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
