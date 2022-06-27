const Discord = require("discord.js");

exports.run = (client, message) => {
  let üye = new Discord.MessageEmbed()
    .setAuthor("Üyedurum")
    .setColor("RED")
   .addField("**<a:tik:779738442249797675> Toplam Kullanıcı**",  message.guild.memberCount )
    .addField("**<a:tik:779738442249797675> Çevrimiçi Kullanıcılar**",  message.guild.members.cache.filter(o => o.presence.status === 'online').size)
  .addField("**<a:tik:779738442249797675> Boşta Kullanıcılar**", message.guild.members.cache.filter(o => o.presence.status === 'idle').size)
.addField("**<a:tik:779738442249797675> Rahatsız Etmeyindeki Kullanıcılar**",  message.guild.members.cache.filter(o => o.presence.status === 'dnd').size)
.addField("**<a:tik:779738442249797675> Çevrimdışı Kullanıcılar**",  message.guild.members.cache.filter(o => o.presence.status === 'offline').size)

    .setTimestamp()
  return message.channel.send(üye);
};

module.exports.conf = {
  aliases: ["üyedurum"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "üyedurum",
  description: "",
  usage: "üyedurum"
};
