const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,StringSelectMenuBuilder,ActivityType } = require("discord.js");
const moment = require("moment")
require('moment-duration-format');
const crax_config = require("../../../crax_config.json")
module.exports = {
name: "oda-panel",
aliases: ["panel"],
execute: async (client, message, args, crax_embed) => {     

    const craxbutton = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setEmoji('✅')
            .setCustomId('oda-oluştur')
            .setLabel(`Oda Oluştur`)
            .setStyle('Success'),
            new ButtonBuilder()
            .setEmoji('➕')
            .setCustomId('user-ekle')
            .setLabel(`Kullanıcı Ekle`)
            .setStyle('Success'),
            new ButtonBuilder()
            .setEmoji('➖')
            .setCustomId('user-cıkar')
            .setLabel(`Kullanıcı Çıkar`)
            .setStyle('Success'),
            new ButtonBuilder()
            .setEmoji('✍️')
            .setCustomId('oda-isim')
            .setLabel(`Oda Adı Değiştir`)
            .setStyle('Success'),
            new ButtonBuilder()
            .setEmoji('❌')
            .setCustomId('oda-sil')
            .setLabel(`Odayı Sil`)
            .setStyle('Success'))

            const craxbutton2 = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setEmoji('🔒')
            .setCustomId('oda-kilit')
            .setLabel(`Odayı Kilitle`)
            .setStyle('Danger'),
            new ButtonBuilder()
            .setEmoji('📻')
            .setCustomId('oda-bit')
            .setLabel(`Bit Hızını Değiştir`)
            .setStyle('Danger'),
            new ButtonBuilder()
            .setEmoji('👥')
            .setCustomId('oda-limit')
            .setLabel(`Oda Limitini Değiştir`)
            .setStyle('Danger'),
            new ButtonBuilder()
            .setEmoji('⛔')
            .setCustomId('sesten-at')
            .setLabel(`Sesten At`)
            .setStyle('Danger'),
            new ButtonBuilder()
            .setEmoji('🔓')
            .setCustomId('oda-herkes')
            .setLabel(`Odayı Herkese Aç`)
            .setStyle('Danger'))

            const craxbutton3 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setEmoji('❓')
                    .setCustomId('oda-bilgi')
                    .setLabel(`Oda Bilgisi`)
                    .setStyle('Primary'))

message.channel.send({content:`> **Aşağıda bulunan butonlar aracılığı ile özel odanızı oluşturabilirsiniz,**\n> **düzenleyebilirsiniz veya diğer tüm oda işlemlerini gerçekleştirebilirsiniz.!**`,components:[craxbutton,craxbutton2]})
message.channel.send({components:[craxbutton3]})
message.delete();



}}