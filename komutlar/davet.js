const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("<<<<Beni Sunucuna Ekle >>>>")
  .setDescription("[__**Davet Et(BOTUN DAVET LİNKİ)**__](https://discord.gg/g6DdYWj7xB) \n [__**Destek Sunucusu**__](https://discord.gg/g6DdYWj7xB)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};