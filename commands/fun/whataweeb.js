const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const {bug} = require('../../handlers/embed.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('what-a-weeb')
    .setDescription('Get\'s memes from r/WhatAWeeb'),

  async execute(interaction) {
    console.log(`[LOG] r/WhatAWeeb has been executed`);
    try{
    const { default: got } = await import('got');
    const response = await got('https://reddit.com/r/WhatAWeeb/random.json');
    const content = JSON.parse(response.body);
    const permalink = content[0].data.children[0].data.permalink;
    const SGUrl = `https://reddit.com${permalink}`;
    const SGImage = content[0].data.children[0].data.url_overridden_by_dest;
    const SGTitle = content[0].data.children[0].data.title;
    const SGUpvotes = content[0].data.children[0].data.ups;
    const SGDownvotes = content[0].data.children[0].data.downs;
    const SGNumComments = content[0].data.children[0].data.num_comments;

    const sg = new EmbedBuilder()
      .setTitle(`r/WhatAWeeb | ${SGTitle}`)
      .setURL(SGUrl)
      .setImage(SGImage)
      .setColor(0x0099ff)
      .setFooter({text: `👍 ${SGUpvotes} 👎 ${SGDownvotes} 💬 ${SGNumComments}`});

    return interaction.reply({ embeds: [sg] });
    }catch (error){
      console.error(`[ERROR] ${error}`)
      return interaction.reply({embeds: [bug]})
    }
  },
};
