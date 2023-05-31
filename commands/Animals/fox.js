const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const {bug} = require('../../handlers/embed.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('fox-facts')
    .setDescription('sends a random fox image with facts'),

    async execute(interaction){
        try{
        console.log(`[LOG] fox Facts has been triggered`)
        const {default: fetch} = await import('node-fetch');
        const res = await fetch('https://randomfox.ca/floof/');
        const fact = await fetch('https://some-random-api.com/facts/fox');
        const faact = (await fact.json()).fact;
        const image = (await res.json()).image;
        const embed = new EmbedBuilder()
        .setTitle('fox Facts!')
        .setDescription(faact)
        .setImage(image)
        .setFooter({text: `Requested by ${interaction.user.tag}`})
        .setTimestamp()
        .setColor(0x22e4cc);
        return interaction.reply({embeds: [embed]})
        }catch (error){
            console.error(`[ERROR] ${error}`)
            return interaction.reply({embeds: [bug]})
        }
    }
}