const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const translations = require('./routes/api/translations');


const app = express(); // Instantiate express

// Bodyparser Middleware
app.use(bodyParser.json());
// This allows cross-origin resource sharing to make HTTP requests
app.use(cors({credentials: true, origin: true}));

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo (via mongoose)
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/translations', translations);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
