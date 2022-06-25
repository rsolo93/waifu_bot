require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.login(process.env.WAIFU_TOKEN);

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    const channel = client.channels.cache.find(channel => channel.name === 'general')
    setInterval(() => {
        waifu(channel);
    }, 50000);
});

client.on("message", gotMessage);


async function gotMessage(msg) {
    if (msg.content === "!waifu" || msg.content === "waifu laifu") {

        let url = `https://tenor.googleapis.com/v2/search?q=nowaifunolaifu&&key=${process.env.TENOR_APIKEY}&client_key=waifu&random=true`
        let response = await fetch(url);
        let json = await response.json();

        const index = Math.floor(Math.random() * json.results.length)

        msg.channel.send(json.results[index].url)

    }
}

async function waifu(channel) {

    let url = `https://tenor.googleapis.com/v2/search?q=nowaifunolaifu&&key=${process.env.TENOR_APIKEY}&client_key=waifu&random=true`
    let response = await fetch(url);
    let json = await response.json();

    const index = Math.floor(Math.random() * json.results.length)

    channel.send(json.results[index].url)
}