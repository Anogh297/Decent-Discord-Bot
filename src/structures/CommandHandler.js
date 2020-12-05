const { Collection } = require('discord.js')

class CommandHandler {
    /**
     * The Client
     * @param {DecentClient} client
     */
    constructor(client, {
        Prefix = '+',
        NoCooldown = client.owners,
        prefixMention = true
    } = {}) {
        super(client)
        
    /**
     * Command Aliases
     * @type {Collection<string, string>}
     */
    this.aliases = new Collection()

    /**
     * Cooldowns Collection
     * @type {Collection<string, Object>}
     */
    this.cooldowns = new Collection()

    /**
     * No Cooldowns
     * @type {string|string[]}
     */
    this.NoCooldown
    }
}