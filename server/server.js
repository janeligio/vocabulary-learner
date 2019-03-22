const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
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

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  console.log("I ran!");
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = 5001; //process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
