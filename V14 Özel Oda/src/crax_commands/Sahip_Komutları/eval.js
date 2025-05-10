const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const moment = require("moment");
const ms = require("ms");
const crax_config = require("../../../crax_config.json")
module.exports = {name: "eval",aliases: [],execute: async (client, message, args, crax_embed) => {
if(message.author.id != crax_config.botOwner)return;
if (!args[0]) return message.reply({content:`> **Lütfen kod giriniz!**`});
let code = args.join(" ");
if (code.includes(client.token)) return message.reply({content:"> **Koruma Protokolüne Yakalandın! ;)**"});
try {var sonuç = eval_crax(await eval(code));
if (sonuç.includes(client.token))
return message.reply({content:"> **Koruma Protokolüne Yakalandın! ;)**"});} catch (err) {}},};function eval_crax(crax) {if (typeof text !== "string")crax = require("util").inspect(crax, { depth: 0 });crax = crax.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));return crax;}