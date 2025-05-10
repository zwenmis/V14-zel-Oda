const client = global.client;
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const crax_config = require("../../crax_config.json");
const ms = require('ms');
module.exports = async (oldMessage,newMessage) => {
if (crax_config.prefix && !newMessage.content.startsWith(crax_config.prefix)) return;
const args = newMessage.content.slice(1).trim().split(/ +/g);
const commands = args.shift().toLowerCase();
const cmd = client.commands.get(commands) || [...client.commands.values()].find((e) => e.aliases && e.aliases.includes(commands));
const crax_embed = new EmbedBuilder().setColor(`#2f3136`).setAuthor({name: newMessage.member.displayName, iconURL: newMessage.author.avatarURL({ dynamic: true, size: 2048 })}).setFooter({text: crax_config.clientPresence ? crax_config.clientPresence : `CraxShop ItemSatis` , iconURL: message.author.avatarURL({ dynamic: true, size: 2048 })})
if (cmd) {
cmd.execute(client, newMessage, args, crax_embed)} }
module.exports.conf = {name: "messageUpdate"}
