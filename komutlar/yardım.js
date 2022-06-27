const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setTitle("STG V12 Yardım Menüsüne Hoş Geldin! |  Başlıca komutlar: ")
 .setTimestamp()
.setDescription("**avatar** = __Avatarınızı görürsünüz.__ \n  **ban** = __istediğiniz kişiyi sunucudan banlar.__ \n  **unban** = __banlanan kişinin banı açılır.__ \n **banner** = __bir banner oluşturur.__ \n  **sil** = __silmek istediğiniz miktarı yazın.__ \n **botbilgi** = __bot hakkında bilgi verir.__ \n **bug** = __bug bildirirsiniz.__ \n **davet** = __botun davet linkini oluşturur.__ \n **duyuru** = __duyuru oluşturur.__ \n **yavaşmod** = __sohbeti yavaş moda alır.__ ")
.setImage("https://i.hizliresim.com/ULYrWa.png")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}