import express from 'express'
import 'dotenv/config'
import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { getMainMenu } from './keyboards.js'

const app = express()
const bot = new Telegraf(process.env.TOKEN)

// bot.start((ctx) => ctx.reply('Welcome'))
bot.start(ctx => { 
    ctx.reply('Welcome, bro', getMainMenu())
})
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.hears('My currencies', ctx => {
    ctx.reply('You currencies will be there')
})

bot.hears('Add currency', ctx => {
    ctx.reply('Add new currency to you list')
})

bot.hears('Random fact', ctx => {
    ctx.reply('Random fact about you currency:')
})

bot.command('time', ctx => {
    ctx.reply(String(new Date()))
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

app.listen(process.env.PORT, () => console.log(`My server is running on port ${process.env.PORT}`))
