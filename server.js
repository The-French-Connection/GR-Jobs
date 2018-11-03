const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


app.get('/test', (req, res) => {
  res.json('yo!!!');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/'));
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
