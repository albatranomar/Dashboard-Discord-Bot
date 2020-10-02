const axios = require("axios").default;
const config = require('../config');
const hat = require("hat");
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(config.discordClient.clientToken);

let OAuthUsers = new Map();
let DISCORDAPI = `https://discord.com/api`;

const { Router } = require("express");
const router = Router();

router

.get('/users/:acat', (req, res) => {
  let acat = req.params.acat;
  if (acat && OAuthUsers.has(acat)) {
    res.status(200).json({
      message: "THIS USER ID IS EXISTS",
      isTruth: true
    });
  } else {
    res.status(200).json({
      message: "THIS USER ID IS \"NOT\" EXISTS",
      isTruth: false
    });
  }
})

.post('/users', async (req, res) => {
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
    let oauth2Data = await axios.post(`${DISCORDAPI}/oauth2/token`, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    
    let infoData = await axios.get(`${DISCORDAPI}/users/@me`, {
      headers: {
        authorization: `${oauth2Data.data.token_type} ${oauth2Data.data.access_token}`,
      },
    })
    let ID = hat();
    OAuthUsers.set(ID, oauth2Data.data.access_token);
    res.json({...infoData.data, acat: ID});
  } catch (error) {
    if (error.isAxiosError) {
      console.log(error.response.data);
      res.status(403).json(error.response.data);
    } else {
      console.error(error);
      res.status(403).json({ message: "Something went wrong" });
    }
  }
})

.get('/users/:acat/guilds', async (req, res) => {
  if (req.params.acat && OAuthUsers.has(req.params.acat)) {
    let at = OAuthUsers.get(req.params.acat);
    let guildsResponse = await axios.get(`${DISCORDAPI}/users/@me/guilds`, {
      headers: {
        authorization: `Bearer ${at}`,
      },
    })
    res.json({
      guilds: guildsResponse.data.filter(g => new Discord.Permissions(g.permissions).toArray(true).includes('MANAGE_GUILD')).map(g => {
        g['isBotInIt'] = client.guilds.cache.has(g.id)
        return g;
      })
    });
  } else {
    res.status(403).json({
      message: `Cannot find ACAT with ${req.params.acat} in MDB`
    });
  }
})

module.exports = router;

