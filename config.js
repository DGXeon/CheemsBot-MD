//═══════[© 2022 Xeon Bot Inc.]════════\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to LORD BUDDHA, ME AND MY 
//FAMILY.

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['6285600380823','6285693650294'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['6285600380823'] //another owner number
global.premium = ['6285600380823'] //premium number
global.pengguna = 'Neo' //username
global.botnma = 'Neo Bot-MD' //bot name
global.ownernma = 'Neo-Owner' //owner name
global.packname = 'Neo Bot' //sticker package name
global.author = 'By Dream Neo' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: 'Done ✓',
    admin: 'Fitur khusus admin grup!',
    botAdmin: 'Bot bukan admin!',
    owner: 'Fitur khusus untuk owner',
    group: 'Fitur hanya bisa digunakan di grup!',
    private: 'Fitur khusus di chat private!',
    bot: 'Fitur khusus bot',
    wait: 'Sedang diproses...⌛',
    endLimit: 'Limit kamu sudah habis, Limit akan di reset jam 12',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 35 //free user limit
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
