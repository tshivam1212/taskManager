const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');
const connectToDatabase = require('./connection/mongoConnection');
const config = require('./config');

// Middleware
app.use(express.json());

// Routes
app.use('/', taskRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err.status == 400) {
    res.status(err.status).send({ "message": err.message, "status": err.status });
  } else {
    res.status(500).send({ "message": 'Internal server error', "status": 500 });
  }
});

// Connect to MongoDB
connectToDatabase().then(() => {
  // Start the server after successful database connection
  app.listen(config.port, () => {
    console.log('Server is running on port ' + config.port);
  });
});
