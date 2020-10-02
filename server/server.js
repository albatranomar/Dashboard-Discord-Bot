const express = require('express');
const app = express();
const cors = require('cors');
const axios = require("axios").default;
const session = require('express-session');
const path = require('path');
const config = require('./config');

var whitelist = ['http://localhost:8080']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));

app.use(session({
  secret: '869789ioiugfcvkbnlm9t6gh89-07ytgyohpjk-097yu-khgfdhljk09erjgfiosdjkf',
  cookie: {
    maxAge: 60000 * 60 * 24
  },
  saveUninitialized: false,
  resave: false,
  name: 'discord.oauth2'
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send({
    message: "Hello."
  });
});

app.use('/api/v1/', require('./routes/apiv1'));

app.listen(config.server.port, () => console.log(`Now listening to requests on port ${config.server.port}`));