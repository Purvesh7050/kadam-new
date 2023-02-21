require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

// it is local url 
const DB_URL = 'mongodb+srv://purvesh2709:Nirant7050@cluster0.ege6neq.mongodb.net/?retryWrites=true&w=majority'; 
// it is mongodb url
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try { 
    await mongoose.connect(MONGO_URI);
    console.log('mongodb connection success!');
  } catch (err) {
    console.log('mongodb connection failed!', err.message);
  }
};

module.exports = connectDB;
