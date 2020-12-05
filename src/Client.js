const { Client, Collection } = require('discord.js')

/**
 * Custom Client
 * @extends Client
 */
class DecentClient extends Client {
    /**
     * Custom Options
     * @param {Object} DecentOptions
     * @param {ClientOptions} ClientOptions
     */
    constructor(DecentOptions, ClientOptions) {
        super(ClientOptions)

        /**
         * Collection of DecentAliases
         * @type {Collection<string, Command>}
         */
        this.DecentAliases = new Collection()

        /**
         * Bot's Token
         * @type {string}
         */
        this.token = DecentOptions.token

        /**
         * Brawl Stars API Key
         * @type {string}
         */
        this.cocapi = DecentOptions.BSapi
    
        /**
         * Clash of Clans API Key
         * @type {string}
         */
        this.cocapi = DecentOptions.COCapi

        /**
         * Clash Royale API Key
         * @type {string}
         */
        this.crapi = DecentOptions.CRapi

        /**
         * GitHub Token
         * @type {string}
         */
        this.ghtoken = DecentOptions.GHtoken

        /**
         * Owners
         * @type {string[]}
         */
        this.owners = DecentOptions.Owners

        /**
         * Developers
         */
        this.developers = DecentOptions.Developers

        /**
         * Error Log Channel
         * @type {string}
         */
        this.Elog = DecentOptions.ErrorLogChannelID

        /**
         * Other Log Channel
         * @type {string}
         */
        this.Olog = DecentOptions.OtherLogChannelID

        /**
         * Functions File Path
         * @type {String}
         */
        this.fn = require(DecentOptions.FunctionFilePath)

        /**
         * Emotes File Path (Json)
         * @type {string}
         */
        this.em = require(DecentOptions.EmoteFilePath)

    }

    /**
     * Check if a user is bot Owner
     * @param {User} user
     */
    Owner(user) {
        if(this.owners.includes(user.id)) return true
        else return false
    }

    /**
     * Check if a user is bot Developer
     * @param {User} user
     */
    Developer(user) {
        if(this.owners.includes(user.id)) return true // Owners are devs imo
        else if (this.developers.includes(user.id)) return true
        else return false
    }

}