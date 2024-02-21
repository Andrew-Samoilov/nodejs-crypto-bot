import express from 'express'
import 'dotenv/config'
import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { getMainMenu } from './keyboards.js'
import LoadYourCurrency from './lib/load-coins.js'

const app = express()
const bot = new Telegraf(process.env.TOKEN)

// bot.start((ctx) => ctx.reply('Welcome'))
bot.start(ctx => { ctx.reply('Welcome, bro', getMainMenu())})
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.hears('My coins', ctx => {
    ctx.replyWithHTML(`<b>You coins there:</b> \n${LoadYourCurrency()}`)
})

bot.hears('Add coins', ctx => {
    ctx.reply('Add new coins to you list')
})
bot.hears('Remove coins', ctx => {
    ctx.reply('Remove coins to you list')
})

bot.hears('Random fact', ctx => {
    ctx.reply('Random fact about you coins:')
})

bot.command('time', ctx => {
    ctx.reply(String(new Date()))
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

app.listen(process.env.PORT, () => console.log(`My server is running on port ${process.env.PORT}`))
