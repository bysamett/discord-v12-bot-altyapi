const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  if (!args[0])
    return message.channel.send(
      `Ac yada kapa yazmalısın!! Örnek: **!spam ac**`
    );
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      " :x: Bu komutu kullanmak için `MESAJLARI_YÖNET` yetkisine sahip olmalısın!"
    );

  if (args[0] === "ac") {
    db.set(`ssaass_${message.guild.id}`, "ac");
    message.channel.send(
      ` :tik:  Artık bot Mesaja karşı spam yapacak. Kapatmak için "\`s!spam kapa\`" yazmalısın.`
    );
  }

  if (args[0] === "kapa") {
    db.set(`ssaass_${message.guild.id}`, "kapa");
    message.channel.send(`<a:tik:779738442249797675> Artık spam yapmayacak.`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["spam-sistemi"],
  permLevel: 0,
  kategori: "Ayarlar",
};

exports.help = {
  name: "spam",
  description: "Spam ayarlarsın.",
  usage: "spam",
};
