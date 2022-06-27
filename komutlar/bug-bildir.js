const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**Bug Bildirmek için Bir Bug Yazınız.** :x:')

const embed = new Discord.MessageEmbed()
.setTitle("Bug Bildirme Sistemi :white_check_mark: ")
.setColor('BLUE')
.setDescription(`**Bug Kanalı :** ${message.channel.name} \n **Bugu Bildiren Kullanıcı :** <@${message.author.id}> \n **Bildirilen Bug :** \`${istek}\``)
client.channels.cache.get('860501064632631317').send(embed)
  
message.channel.send("Bug bildiriminiz gönderildi. :white_check_mark: ").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bug'],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'istek-kod <istek>'
}