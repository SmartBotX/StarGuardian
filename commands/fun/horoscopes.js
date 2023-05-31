const {
  EmbedBuilder,
  SlashCommandBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");
const { bug } = require("../../handlers/embed.js");
const config = require("../../handlers/config.json");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("horoscope")
    .setDescription("Find out what your horoscope is."),

  async execute(interaction) {
    try {
      // Reply to the user asking for their sign
      interaction.deferReply();
      //const {default: fetch} = await import('node-fetch');
      const horoscope = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle("Horoscope")
        .setDescription("What is your sign?")
        .setFooter({ text: `${config.BOT_NAME} \: ${config.BOT_VERSION}` });

      //Buttons a bunch of them.
      const aries = new ButtonBuilder()
        .setCustomId("aries")
        .setLabel("Aries")
        .setStyle(ButtonStyle.Secondary);
      const taurus = new ButtonBuilder()
        .setCustomId("taurus")
        .setLabel("Taurus")
        .setStyle(ButtonStyle.Secondary);
      const gemini = new ButtonBuilder()
        .setCustomId("gemini")
        .setLabel("Gemini")
        .setStyle(ButtonStyle.Secondary);
      const cancer = new ButtonBuilder()
        .setCustomId("cancer")
        .setLabel("Cancer")
        .setStyle(ButtonStyle.Secondary);
      const leo = new ButtonBuilder()
        .setCustomId("leo")
        .setLabel("Leo")
        .setStyle(ButtonStyle.Secondary);
      const virgo = new ButtonBuilder()
        .setCustomId("virgo")
        .setLabel("Virgo")
        .setStyle(ButtonStyle.Secondary);
      const libra = new ButtonBuilder()
        .setCustomId("libra")
        .setLabel("Libra")
        .setStyle(ButtonStyle.Secondary);
      const scorpio = new ButtonBuilder()
        .setCustomId("scorpio")
        .setLabel("Scorpio")
        .setStyle(ButtonStyle.Secondary);
      const sagittarius = new ButtonBuilder()
        .setCustomId("sagittarius")
        .setLabel("Sagittarius")
        .setStyle(ButtonStyle.Secondary);
      const capricorn = new ButtonBuilder()
        .setCustomId("capricorn")
        .setLabel("Capricorn")
        .setStyle(ButtonStyle.Secondary);
      const aquarius = new ButtonBuilder()
        .setCustomId("aquarius")
        .setLabel("Aquarius")
        .setStyle(ButtonStyle.Secondary);
      const pisces = new ButtonBuilder()
        .setCustomId("pisces")
        .setLabel("Pisces")
        .setStyle(ButtonStyle.Secondary);
      //ARB Buttons a bunch of theeem
      const row = new ActionRowBuilder()
        .addComponents(aries)
        .addComponents(taurus)
        .addComponents(gemini)
        .addComponents(cancer)
        .addComponents(leo);

      //new row
      const row2 = new ActionRowBuilder()
        .addComponents(virgo)
        .addComponents(libra)
        .addComponents(scorpio)
        .addComponents(sagittarius)
        .addComponents(capricorn);

      //new row
      const row3 = new ActionRowBuilder()
        .addComponents(aquarius)
        .addComponents(pisces);
      //interaction reply
      const response = await interaction.reply({
        embeds: [horoscope],
        components: [row, row2, row3],
      });
      const collectorFilter = (i) => i.user.id === interaction.user.id;
      try {
        const horo = await response.awaitMessageComponent({
          filter: collectorFilter,
          time: 60_000,
        });
        let sign = "";
        const signs = [
          "aries",
          "taurus",
          "gemini",
          "cancer",
          "leo",
          "virgo",
          "libra",
          "scorpio",
          "sagittarius",
          "capricorn",
          "aquarius",
          "pisces",
        ];
        //this is where the magic begins. every if has an equivalent.
        if (horo.customId === aries) {
          const url = `https://horoscopes-ai.p.rapidapi.com/get_horoscope_en/aries/today/general`;
          const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "4283c6345emsh55b840ecff7586ap1fcdccjsn90cc6fd34d55",
              "X-RapidAPI-Host": "horoscopes-ai.p.rapidapi.com",
            },
          };
          const signhoro = await fetch(url, options);
          const generalhoro = await fetch(url, options);
          const sign = (await signhoro.json()).sign; //What sign the user selected
          const description = (await generalhoro.json()).general; //the horoscope text of the day
          const remstring = description.join("");
          const horoscope = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle(sign)
            .setDescription(remstring)
            .setFooter({ text: `${config.BOT_NAME} \: ${config.BOT_VERSION}` });
          interaction.editReply({ embeds: [horoscope], components: [] });
        } else if (horo.customId === taurus) {
          const url = `https://horoscopes-ai.p.rapidapi.com/get_horoscope_en/taurus/today/general`;
          const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "4283c6345emsh55b840ecff7586ap1fcdccjsn90cc6fd34d55",
              "X-RapidAPI-Host": "horoscopes-ai.p.rapidapi.com",
            },
          };
          const signhoro = await fetch(url, options);
          const generalhoro = await fetch(url, options);
          const sign = (await signhoro.json()).sign; //What sign the user selected
          const description = (await generalhoro.json()).general; //the horoscope text of the day
          const remstring = description.join("");
          const horoscope = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle(sign)
            .setDescription(remstring)
            .setFooter({ text: `${config.BOT_NAME} \: ${config.BOT_VERSION}` });
          interaction.editReply({ embeds: [horoscope], components: [] });
        } else if (horo.customId === gemini) {
          const url = `https://horoscopes-ai.p.rapidapi.com/get_horoscope_en/gemini/today/general`;
          const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "4283c6345emsh55b840ecff7586ap1fcdccjsn90cc6fd34d55",
              "X-RapidAPI-Host": "horoscopes-ai.p.rapidapi.com",
            },
          };
          const signhoro = await fetch(url, options);
          const generalhoro = await fetch(url, options);
          const sign = (await signhoro.json()).sign; //What sign the user selected
          const description = (await generalhoro.json()).general; //the horoscope text of the day
          const remstring = description.join("");
          const horoscope = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle(sign)
            .setDescription(remstring)
            .setFooter({ text: `${config.BOT_NAME} \: ${config.BOT_VERSION}` });
          interaction.editReply({ embeds: [horoscope], components: [] });
        } else if (horo.customId === cancer) {
          const url = `https://horoscopes-ai.p.rapidapi.com/get_horoscope_en/cancer/today/general`;
          const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "4283c6345emsh55b840ecff7586ap1fcdccjsn90cc6fd34d55",
              "X-RapidAPI-Host": "horoscopes-ai.p.rapidapi.com",
            },
          };
          const signhoro = await fetch(url, options);
          const generalhoro = await fetch(url, options);
          const sign = (await signhoro.json()).sign; //What sign the user selected
          const description = (await generalhoro.json()).general; //the horoscope text of the day
          const remstring = description.join("");
          const horoscope = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle(sign)
            .setDescription(remstring)
            .setFooter({ text: `${config.BOT_NAME} \: ${config.BOT_VERSION}` });
          interaction.editReply({ embeds: [horoscope], components: [] });
        } else if (horo.customId === leo) {
          const url = `https://horoscopes-ai.p.rapidapi.com/get_horoscope_en/virgo/today/general`;
          const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "4283c6345emsh55b840ecff7586ap1fcdccjsn90cc6fd34d55",
              "X-RapidAPI-Host": "horoscopes-ai.p.rapidapi.com",
            },
          };
          const signhoro = await fetch(url, options);
          const generalhoro = await fetch(url, options);
          const sign = (await signhoro.json()).sign; //What sign the user selected
          const description = (await generalhoro.json()).general; //the horoscope text of the day
          const remstring = description.join("");
          const horoscope = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle(sign)
            .setDescription(remstring)
            .setFooter({ text: `${config.BOT_NAME} \: ${config.BOT_VERSION}` });
          interaction.editReply({ embeds: [horoscope], components: [] });
        } else if (horo.customId === libra) {
          const url = `https://horoscopes-ai.p.rapidapi.com/get_horoscope_en/libra/today/general`;
          const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "4283c6345emsh55b840ecff7586ap1fcdccjsn90cc6fd34d55",
              "X-RapidAPI-Host": "horoscopes-ai.p.rapidapi.com",
            },
          };
          const signhoro = await fetch(url, options);
          const generalhoro = await fetch(url, options);
          const sign = (await signhoro.json()).sign; //What sign the user selected
          const description = (await generalhoro.json()).general; //the horoscope text of the day
          const remstring = description.join("");
          const horoscope = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle(sign)
            .setDescription(remstring)
            .setFooter({ text: `${config.BOT_NAME} \: ${config.BOT_VERSION}` });
          interaction.editReply({ embeds: [horoscope], components: [] });
        } else if (horo.customId === scorpio) {
          const url = `https://horoscopes-ai.p.rapidapi.com/get_horoscope_en/scorpio/today/general`;
          const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "4283c6345emsh55b840ecff7586ap1fcdccjsn90cc6fd34d55",
              "X-RapidAPI-Host": "horoscopes-ai.p.rapidapi.com",
            },
          };
          const signhoro = await fetch(url, options);
          const generalhoro = await fetch(url, options);
          const sign = (await signhoro.json()).sign; //What sign the user selected
          const description = (await generalhoro.json()).general; //the horoscope text of the day
          const remstring = description.join("");
          const horoscope = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle(sign)
            .setDescription(remstring)
            .setFooter({ text: `${config.BOT_NAME} \: ${config.BOT_VERSION}` });
          interaction.editReply({ embeds: [horoscope], components: [] });
        } else if (horo.customId === sagittarius) {
          const url = `https://horoscopes-ai.p.rapidapi.com/get_horoscope_en/sagittarius/today/general`;
          const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "4283c6345emsh55b840ecff7586ap1fcdccjsn90cc6fd34d55",
              "X-RapidAPI-Host": "horoscopes-ai.p.rapidapi.com",
            },
          };
          const signhoro = await fetch(url, options);
          const generalhoro = await fetch(url, options);
          const sign = (await signhoro.json()).sign; //What sign the user selected
          const description = (await generalhoro.json()).general; //the horoscope text of the day
          const remstring = description.join("");
          const horoscope = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle(sign)
            .setDescription(remstring)
            .setFooter({ text: `${config.BOT_NAME} \: ${config.BOT_VERSION}` });
          interaction.editReply({ embeds: [horoscope], components: [] });
        } else if (horo.customId === capricorn) {
          const url = `https://horoscopes-ai.p.rapidapi.com/get_horoscope_en/capricorn/today/general`;
          const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "4283c6345emsh55b840ecff7586ap1fcdccjsn90cc6fd34d55",
              "X-RapidAPI-Host": "horoscopes-ai.p.rapidapi.com",
            },
          };
          const signhoro = await fetch(url, options);
          const generalhoro = await fetch(url, options);
          const sign = (await signhoro.json()).sign; //What sign the user selected
          const description = (await generalhoro.json()).general; //the horoscope text of the day
          const remstring = description.join("");
          const horoscope = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle(sign)
            .setDescription(remstring)
            .setFooter({ text: `${config.BOT_NAME} \: ${config.BOT_VERSION}` });
          interaction.editReply({ embeds: [horoscope], components: [] });
        } else if (horo.customId === aquarius) {
          const url = `https://horoscopes-ai.p.rapidapi.com/get_horoscope_en/aquarius/today/general`;
          const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "4283c6345emsh55b840ecff7586ap1fcdccjsn90cc6fd34d55",
              "X-RapidAPI-Host": "horoscopes-ai.p.rapidapi.com",
            },
          };
          const signhoro = await fetch(url, options);
          const generalhoro = await fetch(url, options);
          const sign = (await signhoro.json()).sign; //What sign the user selected
          const description = (await generalhoro.json()).general; //the horoscope text of the day
          const remstring = description.join("");
          const horoscope = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle(sign)
            .setDescription(remstring)
            .setFooter({ text: `${config.BOT_NAME} \: ${config.BOT_VERSION}` });
          interaction.editReply({ embeds: [horoscope], components: [] });
        } else if (horo.customId === pisces) {
          const url = `https://horoscopes-ai.p.rapidapi.com/get_horoscope_en/pisces/today/general`;
          const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "4283c6345emsh55b840ecff7586ap1fcdccjsn90cc6fd34d55",
              "X-RapidAPI-Host": "horoscopes-ai.p.rapidapi.com",
            },
          };
          const signhoro = await fetch(url, options);
          const generalhoro = await fetch(url, options);
          const sign = (await signhoro.json()).sign; //What sign the user selected
          const description = (await generalhoro.json()).general; //the horoscope text of the day
          const remstring = description.join("");
          const horoscope = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle(sign)
            .setDescription(remstring)
            .setFooter({ text: `${config.BOT_NAME} \: ${config.BOT_VERSION}` });
          interaction.editReply({ embeds: [horoscope], components: [] });
          console.log("[LOG]: Pisces has been selected");
        } else {
          await interaction.editReply({
            content: "Confirmation not recieved within 1 minute, cancelling",
          });
        }
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
      interaction.reply({ embeds: [bug] });
    }
  },
};
