const { Command } =  require('discord-akairo')
const { MessageEmbed } = require('discord.js')

class Reload extends Command{
    constructor() {
        super("reloadall", {
            aliases: ["reloadall"],
            editable: false,
            typing: true,
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Reload everything"
            },
            developerOnly: true,
        })
    }

    async exec(message) {

        await this.client.CommandHandler.reloadAll()
        await this.client.ListenerHandler.reloadAll()
        const embed = new MessageEmbed()
        .setAuthor(`Reloaded Everything`)
        return message.channel.send(embed)
    }

}

module.exports = Reload