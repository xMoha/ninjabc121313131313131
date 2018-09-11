const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
const prefix = "-";


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
