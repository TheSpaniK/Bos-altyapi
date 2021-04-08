const FroLenk = require('discord.js');

exports.run = (client, message, args) => {
    let üye = message.mentions.members.first();
  if(!üye) {//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101
    const embed = new FroLenk.MessageEmbed()
      .setImage(message.author.avatarURL)
    message.channel.send(embed)
  }//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101
  if(üye) {
    let embed = new FroLenk.MessageEmbed()
      .setImage(üye.user.avatarURL)
    message.channel.send(embed)
  }//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101
};//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101//FroLenk yapımcıları iyi kodlamalar diler Spanik#9101
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["pp"],
  permLevel: 0
}

exports.help = {
  name: 'avatar'
};