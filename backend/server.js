require('dotenv').config();

const requiredEnvVars = ['MONGODB_URL'];
const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error(`Missing environment variables: ${missingEnvVars.join(', ')}`);
  process.exit(1);
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itemRoutes = require('./routes/itemsRoute'); // Adjust the path if necessary

const app = express();

app.use(cors());
app.use(express.json());

app.use('/todos', itemRoutes);

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(4000, () => {
      console.log('Server is running on port 4000, connected to the database');
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error.message);
    process.exit(1); // Exit the process if unable to connect to the database
  });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});
