const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require("chalk");//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101
const fs = require("fs");
const http = require("http");//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101
const express = require("express");//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101
require("./util/eventLoader")(client);
//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101
client.ayarlar = { "token": "NzUzOTY4NDEzNDk1NTI1NDA4.X1t5zQ.yQxZzrQkFN7i4hI5WscXKx0C3j4", "prefix": "f!", "sahip": "450571027932774405" }
//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101
const app = express();
app.get("/", (request, response) => {
  console.log();
  response.sendStatus(200);
});//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101
var prefix = client.ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Yüklenen komut: ${client.ayarlar.prefix}${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./commands/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 1;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 2;
  if (message.author.id === message.guild.owner.id) permlvl = 3;
  if (message.author.id === client.ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g

client.login(client.ayarlar.token);

client.on('ready', async () => {
client.user.setActivity('Spanik#9101, tertemiz altyapı!')
client.user.setStatus('idle')
})