import DiscordJS, {Intents} from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', ()=>{
    console.log('The bot is ready')
})

client.on('messageCreate', (message)=>{
    if (message.content === 'hd 1'){
        message.reply({
            content: 'https://discord.com/channels/849928013725302795/965706903676145684/967385575520894986'
        })
    }
})

client.login(process.env.TOKEN)