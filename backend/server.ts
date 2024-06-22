import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import imageRouter from './routers/imageRouter';

const app = express();
const PORT = 5050;

// Use CORS middleware
app.use(cors());
app.use(express.static('public'))
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/imageUploadDB', {

})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));
const db = mongoose.connection;

// Check MongoDB connection
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Serve static files
app.use('/uploads', express.static('public/uploads'));

// Routers
app.use('/api', imageRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
