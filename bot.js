const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "-";

client.on('message', message => {
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**-bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });
    

const adminprefix = "-";
const devs = ['455108784579149835','452785037511753728'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`);
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then;
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`);
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`);
}

});

client.on("message", message => {
 if (message.content === `${prefix}vhelp`) {
 	
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
${prefix}setname ⇏ تغير اسم بوت
${prefix}setavatar ⇏ تغير صورة بوت
${prefix}setT ⇏ تخلي بوت حالته بنفسجي
${prefix}setgame ⇏ تخلي حالة بوت يلعب شي
 `);
   message.channel.sendEmbed(embed);
    
   }
   }); 
   
   client.login(process.env.BOT_TOKEN);
   
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `);
    console.log(`[Codes] ${client.users.size}`);
    client.user.setStatus("DND");
});
