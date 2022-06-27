const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`:warning: Bu komudu kullanabilmek için yetkin yok.`)
  if (!args[0]) return message.channel.send(`:white_check_mark:  Reklam Filtresini Açmak İçin \`s!link aç\` | :no_entry: Kapatmak İstiyorsanız \`s!link kapat\` Yazabilirsiniz`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`:white_check_mark:  Reklam Filtresini Ayarlamak İçin \`s!link aç\` | Kapatmak İstiyorsanız \`s!link kapat\` Yazabilirsiniz`)

    if (args[0] == 'aç') {
    db.set(`reklamFiltre_${message.guild.id}`, 'acik')
    let i = await db.fetch(`reklamFiltre_${message.guild.id}`)
  message.channel.send(`:white_check_mark: Reklam Filtresi başarıyla açıldı.`)    
     
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`reklamFiltre_${message.guild.id}`)
    if (!üye) return message.channel.send(`Heey, Reklam filtresini açtığına emin misin?.`)
    
    
    db.delete(`reklamFiltre_${message.guild.id}`)
    
    message.channel.send(`:no_entry:Reklam filtresini kapattım.`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['link','reklam'],
 permLevel: 0
};

exports.help = {
 name: 'reklam-engel',
 description: 'reklamm',
 usage: 'gkanal'
};