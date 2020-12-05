const ak = require('discord-akairo')
const config = require('../../config.json')

class DecentClient extends ak.AkairoClient {
    constructor(Config) {
        super({
            ownerID: config.bot.ownerids
        })
        this.ListenerHandler = new ak.ListenerHandler(this, {
            directory: './listeners'
        })
        this.CommandHandler = new ak.CommandHandler(this, {
            directory: './commands',
            prefix: '+',
            allowMention: true,
            blockBots: true,
            blockClient: true,
            commandUtil: true,
            automateCategories: true
        })
        this.Config = Config

        this.token = config.bot.token

        this.bsapi = config.api.bs

        this.cocapi = config.api.coc

        this.crapi = config.api.cr

        this.ghapi = config.api.gh

        this.developers = config.developers

    }

    async isDeveloper(user) {
        if (this.isOwner(user)) return true
        else if (this.developers.includes(user.id)) return true
        else return false
    }

    async _init() {
        this.CommandHandler.useListenerHandler(this.ListenerHandler)
        this.ListenerHandler.setEmitters({
            CommandHandler: this.CommandHandler,
            ListenerHandler: this.ListenerHandler,
            process
        })
        this.CommandHandler.loadAll()
        this.ListenerHandler.loadAll()
    }

    async start() {
        await this._init()
        return this.login(this.token)
    }
}

module.exports = DecentClient