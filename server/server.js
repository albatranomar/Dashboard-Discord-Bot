const express = require('express');
const app = express();
const cors = require('cors');
const axios = require("axios").default;
const session = require('express-session');
const path = require('path');
const config = require('./config');
const fetch = require("node-fetch");

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

app.get('/api/v1/users/:acat', (req, res) => {
  console.log(req.params);
});

app.post('/api/v1/users/', async (req, res) => {
  const data = {
    client_id: config.discordClient.clientID,
    client_secret: config.discordClient.clientSecret,
    grant_type: 'authorization_code',
    redirect_uri: config.discordClient.redirectURI,
    code: req.body.code,
    scope: 'identify',
  };
  let params = new URLSearchParams(data);
  try {
    let oauth2Data = await axios.post(`https://discord.com/api/oauth2/token`, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    
    let infoData = await axios.get('https://discord.com/api/users/@me', {
      headers: {
        authorization: `${oauth2Data.data.token_type} ${oauth2Data.data.access_token}`,
      },
    })
    res.json(infoData.data);
  } catch (error) {
    if (error.isAxiosError) {
      console.log(error.response.data);
    }
  }
});

app.listen(config.server.port, () => console.log(`Now listening to requests on port ${config.server.port}`));