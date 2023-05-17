const mongoose = require('mongoose');
const config = require('../config');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.dburl, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1); // Exit the application if failed to connect to the database
  }
};

module.exports = connectToDatabase;
