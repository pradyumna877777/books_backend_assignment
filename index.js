const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes/book')
require('dotenv').config()
const app = express();

app.use(bodyParser.json());
app.use(express.json())
app.use(router)


const env = process.env;
const port = env.PORT
const MONGO_URI = env.MONGO_URI


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

