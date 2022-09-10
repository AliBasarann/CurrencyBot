const Discord = require("discord.js")
const { Client, GatewayIntentBits } = require('discord.js');
var XMLHttpRequest = require('xhr2');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () =>{
    console.log("logged in")
})

client.on("messageCreate", (msg) => {
    if(msg.content == "!dolar"){
        var requestURL = 'https://api.genelpara.com/embed/para-birimleri.json';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function() {
            var response = request.response;
            msg.reply("dolar alış: " + response.USD.alis + " TL \ndolar satış: " + response.USD.satis + " TL\ndeğişim: %" + response.USD.degisim)
        }
    }
    else if(msg.content == "!euro"){
        var requestURL = 'https://api.genelpara.com/embed/para-birimleri.json';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function() {
            var response = request.response;
            msg.reply("euro alış: " + response.EUR.alis + " TL \neuro satış: " + response.EUR.satis + " TL \ndeğişim: %" + response.EUR.degisim)
        }
    }
    else if(msg.content == "!sterlin"){
        var requestURL = 'https://api.genelpara.com/embed/para-birimleri.json';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function() {
            var response = request.response;
            msg.reply("sterlin alış: " + response.GBP.alis + " TL \nsterlin satış: " + response.GBP.satis + " TL\ndeğişim: %" + response.GBP.degisim)
        }
    }
    else if(msg.content == "!kuveyt dinarı"){
        var requestURL = 'https://api.exchangerate.host/convert?from=KWD&to=TRY';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function() {
            var response = request.response;
            msg.reply("1 kuveyt dinarı " + response.result + " TL")
        }
    }
    else if(msg.content == "!gram altın"){
        var requestURL = 'https://api.genelpara.com/embed/para-birimleri.json';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function() {
            var response = request.response;
            msg.reply("gram altın alış: " + response.GA.alis + " TL \ngram altın satış: " + response.GA.satis + " TL\ndeğişim: %" + response.GA.degisim)
        }
    }
    else if(msg.content == "!gümüş"){
        var requestURL = 'https://api.exchangerate.host/convert?from=XAG&to=TRY';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function() {
            var response = request.response;
            msg.reply("1 ons gümüş " + response.result + "TL")
        }
      
const mySecret = process.env['token']
    }
     else if(msg.content == "!BTC"){
        var requestURL = 'https://api.genelpara.com/embed/para-birimleri.json';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function() {
            var response = request.response;
            msg.reply("bitcoin alış: " + response.BTC.alis + " TL \nBTC satış: " + response.BTC.satis + " TL\ndeğişim: %" + response.BTC.degisim)
        }
    }
     else if(msg.content == "!ETH"){
        var requestURL = 'https://api.genelpara.com/embed/para-birimleri.json';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function() {
            var response = request.response;
            msg.reply("ETH alış: " + response.ETH.alis + " TL \nETH satış: " + response.ETH.satis + " TL\ndeğişim: %" + response.GA.degisim)
        }
    }
})

client.login(process.env.token)