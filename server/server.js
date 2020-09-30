const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const config = require('./config');

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

app.get('/', (req, res) => {
  res.send({
    message: "Hello.",
    user: req.session.user
  });
});

app.listen(config.server.port, () => console.log(`Now listening to requests on port ${config.server.port}`));