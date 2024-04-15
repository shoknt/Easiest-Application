const mySecret = process.env['TOKEN']
const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Yo boi!!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);

//import the Discord Library
const Discord = require("discord.js");

//import the config.json file
const config = require("./config.json")

//create a new Client
const client = new Discord.Client({
  fetchAllMembers: false,
  restTimeOffset: 0,
  shards: "auto",
  restWsBridgetimeout: 100,
  disableEveryone: true,
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  presence: {
    afk: false,
    activity: {
      name: `${config.prefix}help | ${config.prefix}setup`, 
      type: "WATCHING", 
    },
    status: "idle"
  }
});


//import our databasing system
const Enmap = require("enmap");

      
