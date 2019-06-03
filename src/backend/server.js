const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
const messageRoutes = express.Router();
const PORT = 5000;

let Message = require('./contact.model');

var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end();
});

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(config.db, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
  console.log('MongoDB connection');
});

messageRoutes.route('/').post(function(req, res) {
  let message = new Message(req.body);
  message
    .save()
    .then(message => {
      res.status(200).json({ message: 'Pomyślnie wysłano wiadomość' });
    })
    .catch(err => {
      res.status(400).send('wysyłanie wiadomości nie powiodło się');
    });
});
app.use('/', messageRoutes);

app.listen(PORT || '0.0.0.0', function() {
  console.log('Server is running on port: ' + PORT);
});

server.listen(PORT || 'http://www.tymon-dev.pl');
