const client = global.client;
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType,ChannelType,PermissionFlagsBits } = require("discord.js");
const crax_config = require("../../crax_config.json")
module.exports = async (oldFive,newFive) => {
if(!newFive.channel)return;

let channel = client.guilds.cache.get(crax_config.sunucuID).channels.cache.get(newFive.channelId);
if(channel.parentId == crax_config.kategoriID){
let data = client.db.get(`members_${newFive.channel.id}`)
if(!data)return;
if(data.some(crax => crax.includes(newFive.member.id)))return;
newFive.member.voice.disconnect();
}else return

}
module.exports.conf = {
name: "voiceStateUpdate"
}
