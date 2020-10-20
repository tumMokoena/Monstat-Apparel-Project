const mongoose = require('mongoose');
const dotenv = require('dotenv');

const DB = process.env.LOCAL_MONGO_URI;

const connectDB = () => {
  mongoose
    .connect('mongodb://localhost/montastDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log('DB connection successful');
    })
    .catch((err) => {
      console.log(err);
      console.log('failde');
    });
};

module.exports = connectDB;
