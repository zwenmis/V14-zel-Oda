const crax_config = require("../../crax_config.json");
const { joinVoiceChannel } = require("@discordjs/voice");
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const client = global.client;
module.exports = () => {

client.user.setPresence({activities:[{name:`Özel Oda Sistemi`,type: ActivityType.Streaming,url:"https://www.twitch.tv/keskingolgetv"}], status: "dnd" });
const crax_kanal = client.channels.cache.get(crax_config.voiceChannel);
if(!crax_kanal)return
joinVoiceChannel({channelId: crax_kanal.id,guildId: crax_kanal.guild.id,adapterCreator: crax_kanal.guild.voiceAdapterCreator,selfDeaf: true,selfMute:true});



const guild = client.guilds.cache.get(crax_config.sunucuID)
setInterval(function(){
guild.channels.cache.forEach(async channel => {
if (channel.name.startsWith('#')) {
    let channeldata = client.db.get(`${channel.id}`)
    if(!channeldata)return;
    let member = guild.members.cache.get(channeldata)
    let data = client.db.get(`özeloda_${channeldata}`)
    if(!data)return;
    if (channel.members.size == 0) {
    channel.delete()
    client.db.delete(`members_${channel.id}`)
    client.db.delete(`özeloda_${channeldata}`)
    client.db.delete(`${channel.id}`)
   //member.user.send({content:`> **Merhaba ${member.user.username}**\n> *Odada Olmadığın İçin Özel Odan Kapatıldı!*`}).catch((crax) => { })
    }
}
})
},crax_config.odaSure)


}
module.exports.conf = {
name: "ready"
}
