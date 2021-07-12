module.exports = {
    name: 'ban',
    description: "This command kicks a member!",
    execute(message, args, client, Discord, discord){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            var embedCreateTicket = new Discord.MessageEmbed()
                .setTitle("User verbannen")
                .setDescription(`**${memberTarget}** is verbannen!`)
                .setTimestamp()
                .setFooter("| FleshNetwerk ", "https://cdn.discordapp.com/attachments/807245844213530695/860193553379885126/Banner_flesh.jpg");       
          var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "🔒╹moderator-only");
          if (!ticketChannel) return message.reply("Kanaal bestaat niet");
          ticketChannel.send(embedCreateTicket);
            message.channel.send(embedCreateTicket);
        }else{
            message.channel.send(`Geef een speler op!`);
        }   
    }
} 