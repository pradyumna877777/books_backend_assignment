const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes/book')
const app = express();

app.use(bodyParser.json());
app.use(express.json())
app.use(router)

const port = 3000;



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

// Connect to MongoDB
mongoose.connect('mongodb+srv://pradyumnareddyk18:backend@cluster0.eyyzmbn.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

