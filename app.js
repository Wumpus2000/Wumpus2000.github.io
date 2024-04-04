require('dotenv').config();
const { MessageEmbed, Client } = require('discord.js');
const client = new Client();
const axios = require('axios');
const cheerio = require('cheerio');
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const marvelList = require('./marvelList');
const PORT = process.env.PORT;
const express = require('express');
const app = express();
const path = require('path'); 
const e = require('express');
const publicDir = path.join(__dirname,'./public')


app.use(express.static(publicDir)) 

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
})

let googleKey = process.env.GOOGLE_KEY
let csx = process.env.CSX
let googleKeyMusic = process.env.GOOGLE_KEY_METROLYRICS
let csxMusic = process.env.CSX_METROLYRICS
let stackkey = process.env.GOOGLE_KEY_STACK
let stackcsx = process.env.CSX_STACK

client.on('ready',() => {
    client.user.setActivity('.help',{type: 'PLAYING'})
})

var dispatcher;
var smallTalkVar = false;
var music = false;
const prefix = process.env.PREFIX;

// functions

const randNo = (limit) => {
    const thatNo = Math.floor(Math.random() * limit);
    return thatNo;
};
const playFunc = async (message, args) => {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send('You need to be in a channel to execute this command!');
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissins');
    if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissins');

    const validURL = (str) =>{
        var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        if(!regex.test(str)){
            return false;
        } return true;
    }
    if(validURL(args)){
        // return message.reply(`${args} to be played`);
        const  connection = await voiceChannel.join();
        const stream  = ytdl(args, {filter: 'audioonly'});
        dispatcher = connection.play(stream)
        dispatcher.on('finish', () =>{
            voiceChannel.leave();
            message.channel.send('leaving channel');
        })
        dispatcher.on('error', error =>
        {
        console.log(error)
        });
        await message.reply(`:thumbsup: Now Playing ***Your Link!***`)
        return;
    }
    const  connection = await voiceChannel.join();
    const videoFinder = async (query) => {
        const videoResult = await ytSearch(query);
        return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
    }
    const video = await videoFinder(args);
    if(video){
        // return message.reply(`${video.url} to be played`);
        const stream  = ytdl(video.url, {filter: 'audioonly'});
        const dispatcher = connection.play(stream)
        dispatcher.on('start', () =>{
            music = true;
        })
        dispatcher.on('finish', () =>{
            // music = false;
            // voiceChannel.leave();
            // message.channel.send('Thanks for using the music service :heart: !');
        })
        dispatcher.on('error', error =>
        {
        console.log(error)
        });
        await message.reply(`:thumbsup: Now Playing ***${video.title}***`)
        return
    } else {
        message.channel.send('No video results found');
    }
}
const stopFunc = async (message) => {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send('You need to be in a channel to execute this command!');
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissins');
    if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissins');
    music=false;
    voiceChannel.leave()
    await message.channel.send('Thanks for using the music service :heart: !');
}
async function smallTalk(message) {
    try{
        const sessionId = uuid.v4();
        const projectId = process.env.PROJECT_ID
        const sessionClient = new dialogflow.SessionsClient({
            credentials: {
                "type": "service_account",
                "project_id": process.env.PROJECT_ID,
                "private_key_id": process.env.PRIVATE_KEY_ID,
                "private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGNQq9xB/UeuHN\naOuLFhqJtNpG30lB0W0BBY0gBGhP2AzhXlAzFO9PmvGHnyHMGMECfinkPRhoWc9c\nxhUdqJ08tTCKMC8k9ZyD60ZosBHWRxxkPTyMXj/1mYLnPSN2+LN30NKPxMPfi50w\nNmTmbk4749RUEXIeFpj7UdakGgHjNA5OkZ+/GxAnz3dBR5lcIUNmMVDJGiPpEDDG\nA3/HCzmN0QuCs9nJvCD4d6FaERtKUXzumcRINpxAnxLPf0DyOmXoxuCAQJw5zXNY\nRWm3KcFnKsQSORVJCUsve5PTATLf2tDcLHa4nKUJUL5mZcgaAiadSbnAvgTMyMGE\nu6aYqWKXAgMBAAECggEABQ3VMSw5v/9+l9OcLfbbNmCX92FWoGxaN6VXQh1Mby6M\nCRasyi7iB7ry0UJ9hMwcynqXwYhbgaMBgw3fUUz0Q61bFpzAXhuP2wYr6P935r7b\nOno40QYkcLQc8J3ee2ojKWPbiN0tWlQftRPm4k6modIYENPS1Rw+ZtTS8obwIdPY\nO8OLYM2fsnX3uP/THwwYEOxYuncfSx2oxF+gONHHhyM/qTuMi2hwghDjBTlajO4P\n+8IlCIADHeAKo2jW2nQmETP+VFIMMWWorK68RJbE6d4VXzPopGpboLsX2mrKF0hU\nyWTWd+v4B4/qpQiuwFk1OVhKBYd3rZLNHavgdBG8AQKBgQD0a9rcdsYkkwBx6dgg\nUFpWBbcS6p4bSq8I60DFy3ZaNcaJEpdeC/34SgbAKB7eAPFK2fr52+eA96Rebk+2\nl+9Kz0G1DZsDzOqwjYnivICofY7Sqii/0nQkx1VPoPVRUrZVjjJ9r9xm2WPycfES\nz70sH1G1nXiASo+BOY0CrhFYrwKBgQDPmL1LVNeRJrt8gzcl4fTz00YbmZryfRN9\nDtqIfBeK6f+p6/FitaBITC9IkLtC3DWjgPVGEansOLMi90HZXyTl/Y/c1Fv8HnC9\nza63w3RxDaTGP2zRMTiMMo7kTfcJilIFHe6OOnz7d7HnytKhYzHgxfmt3iQs3B/r\nhf3oAn8+mQKBgQC+GdTTe52IfLzv3Ey4dUaNeUx2bfwihee1LCPosuKOLx0HJ2qL\nPxB8uDaf5ZR8XodNDFTjWGGqMPGqcGmXPnxi1ufoBXj3b71pK+x+aNY4Nc+LkcS3\nzNuAb3iuwiWK5qXhzQMANnNZmuLdgjlZxDEBzCok8yDxxwvuGfDOkMv1CQKBgDzy\nwfig8x0ZewgGWiWUHl+LktS9l0FEOXmI594UWLEfHEGeFON/IYy4WVV7sI7jqhfT\n367vtqy0xNsqLroL9gBUHm2eJ1dw9Ha1MWugRcp/T/YoXuFYCxsWKN+ciD/TzVrV\nO9mkEFef/6pm4MojHly4oyJJyuMkyXZTg4UfXo5ZAoGAR+jWAWHA3Xfjm+Ec9Z5g\nAHeSgBWfqROAVMP3DQ0LAA0La2f6Qa4sbVeVcLhR8s/fpEzACT+BdMiND1TVrdLC\nmrYsbcmmuM6+4vFhVQFxK2O4OEBD7sbn1+chPtxehcR25gbmxlf+FToMo3sqLzPP\nbE449GlRInTlOMD5zMAg0No=\n-----END PRIVATE KEY-----\n",
                "client_email": process.env.CLIENT_EMAIL,
                "client_id": process.env.CLIENT_ID,
                "auth_uri": process.env.AUTH_URI,
                "token_uri": process.env.TOKEN_URI,
                "auth_provider_x509_cert_url": process.env.AUTH_CERT_URI,
                "client_x509_cert_url": process.env.CLIENT_CERT_URI,
            }
        });
        const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);
        const request = {
        session: sessionPath,
        queryInput: {
            text: {
            text: message.content,
            languageCode: 'en-US',
            },
        },
        };

        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;
        console.log(result);
        await  message.reply(result.fulfillmentText);
    }
    catch(e){
        console.log(e);
    }
  }

client.on('message', (message) => {
    // ignoring bot messages
    if(message.author.bot) return;
    // atishi help commands
    if (message.content === prefix+ "help" ) {
        const Embed = new MessageEmbed()
        .setTitle('Wampas Bot Help Commands')
        .setDescription('Wampas Bot offers a wide range of features, explore them with these help commands. [visit for more](https://atishi.me)\u200B')
        .setThumbnail('https://cdn.discordapp.com/attachments/939720531492605963/949571956057993256/wampas247.jpg')
        .addFields(
            { name: `Chatbot <:member:941943784097321000>\u0009`, value: '`!!talk`', inline: true},
            { name: `Play Music <:musics:940459010920951848>\u0009`, value: '`!!music`', inline: true },
            { name: `Fun <:members:942191114444767305>\u0009`, value: '`!!fun`', inline: true },
            { name: `Assist <:threads:941943740816318465>\u0009`, value: '`!!assist`', inline: true },  
            { name: `Moderator <:staff:942191114964860998>\u0009`, value: '`!!moderate`', inline: true },
            { name: `Marvel <:sparks:941943783904395285>\u0009`, value: '`!!marvel`', inline: true },       
            { name: `Report a bug\u0009`, value: 'Help us improve! [Report a bug here](https://atishi.me/#collaborator)', inline: true },       
        )
        .setColor('#5865f2')
        .setTimestamp()
        .setFooter('wampas', 'https://cdn.discordapp.com/attachments/939720531492605963/949571956057993256/wampas247.jpg');
        message.channel.send(Embed);
    }
    if (message.content.startsWith(prefix+ "talk") ) {
        const Embed = new MessageEmbed()
        .setTitle('Wampas Bot Help Commands')
        .setDescription('Use these commands to talk to !!. Type something like:  "hi, how are you?". [visit for more](https://atishi.me)\u200B')
        .setThumbnail('https://cdn.discordapp.com/attachments/939720531492605963/949571956057993256/wampas247.jpg')
        .addFields(
            { name: 'Initiate chatbot! :wave:', value: '`!!hi`', inline: true },
            { name: 'Stop chatbot! :open_hands:', value: '`!!bye`', inline: true },
        )
        .setColor('#5865f2')
        .setTimestamp()
        .setFooter('wampas', 'https://cdn.discordapp.com/attachments/939720531492605963/949571956057993256/wampas247.jpg');
        message.channel.send(Embed);
    }
    if (message.content.startsWith(prefix+ "music") ) {
        const Embed = new MessageEmbed()
        .setTitle('Wampas Bot Help Commands')
        .setDescription('Use these music commands to play songs or get song lyrics right here on youtube. [visit for more](https://atishi.me)\u200B')
        .setThumbnail('https://cdn.discordapp.com/attachments/939720531492605963/949571956057993256/wampas247.jpg')
        .addFields(
            { name: 'Get song lyrics :musical_score:', value: '!!lyrics "..."', inline: true },
            { name: 'Play a song :headphones:', value: '!!play "..."', inline: true },
            { name: 'Stop a song :mute:\u200B', value: '!!stop "..."\u200B', inline: true },
        )
        .setColor('#5865f2')
        .setTimestamp()
        .setFooter('wampas', 'https://cdn.discordapp.com/attachments/939720531492605963/949571956057993256/wampas247.jpg');
        message.channel.send(Embed);
    }
    if (message.content.startsWith(prefix+ "fun") ) {
        const Embed = new MessageEmbed()
        .setTitle('Wampas iBot Help Commands')
        .setDescription('Bored? Can atishi interest you in a meme? or a roast perhaps?". [visit for more](https://atishi.me)\u200B')
        .setThumbnail('https://cdn.discordapp.com/attachments/939720531492605963/949571956057993256/wampas247.jpg')
        .addFields(
            { name: 'Roast someone :smiling_imp:', value: '!!roast "@.."\u200B', inline: true },
            { name: 'Get a meme :joy:"\u200B', value: '!!meme', inline: true },
            { name: 'Simpmeter :pinching_hand:', value: '!!simpmeter "@.."', inline: true },
        )
        .setColor('#5865f2')
        .setTimestamp()
        .setFooter('wampas', 'https://cdn.discordapp.com/attachments/939720531492605963/949571956057993256/wampas247.jpg');
        message.channel.send(Embed);
    }
    if (message.content.startsWith(prefix+ "assist") ) {
        const Embed = new MessageEmbed()
        .setTitle('Wampas Bot Help Commands')
        .setDescription('Get the date, time or google anything you like. [visit for more](https://atishi.me)\u200B')
        .setThumbnail('https://cdn.discordapp.com/attachments/939720531492605963/949571956057993256/wampas247.jpg')
        .addFields(
            { name: 'Feeling low? Get an inspirational quote :innocent:', value: '.inspire', inline: false },
            { name: "Get today's date :calendar: ", value: '!!date', inline: true },
            { name: 'Get current time :alarm_clock:\u200B', value: '!!time\u200B', inline: true },
            { name: 'Google anything :globe_with_meridians:\u200B', value: '!!google ".."\u200B', inline: true }, 
            { name: 'Ask a technical doubt :man_genie:\u200B', value: '!! tech ".."\u200B', inline: true }, 
        )
        .setColor('#5865f2')
        .setTimestamp()
        .setFooter('wampas', 'https://cdn.discordapp.com/attachments/939720531492605963/949571956057993256/wampas247.jpg');
        message.channel.send(Embed);
    }
    if (message.content.startsWith(prefix+ "moderate") ) {
        const Embed = new MessageEmbed()
        .setTitle('Wampas Bot Help Commands')
        .setDescription('Perform basic moderator task with ease. [visit for more](https://atishi.me)\u200B')
        .setThumbnail('https://cdn.discordapp.com/attachments/939720531492605963/949571956057993256/wampas247.jpg')
        .addFields(
            { name: 'Kick user :person_walking:', value: '!!kick', inline: true },
            { name: 'Ban  user :man_walking:', value: '!!ban', inline: true },
            { name: 'Create a role :pencil2:', value: '!!new-role "..."', inline: true },
            { name: 'Delete a role :wastebasket:\u200B', value: '!!del-role "..."\u200B', inline: true },
            { name: 'Assign user role :pencil:', value: '!!give-role "..." "@.."', inline: true },
            { name: 'Remove user role :wastebasket:', value: '!!rem-role "..." "@.."', inline: true },
            { name: 'Create text channel :closed_book:', value: '!!new-tc "..."', inline: true },
            { name: 'Delete text channel :wastebasket:\u200B', value: '!!del-tc "..."\u200B', inline: true },
            { name: 'Create voice channel :loud_sound:', value: '!!new-vc "..."', inline: true },
            { name: 'Delete voice channel :wastebasket:\n', value: '!!del-vc "..."\n', inline: true },  
        )
        .setColor('#5865f2')
        .setTimestamp()
        .setFooter('wampas', 'https://cdn.discordapp.com/attachments/939720531492605963/949571956057993256/wampas247.jpg');
        message.channel.send(Embed);
    }
    if (message.content.startsWith(prefix+ "marvel") ) {
        const Embed = new MessageEmbed()
        .setTitle('Wampas Bot Help Commands')
        .setDescription('Find out which marvel character you are. [visit for more](https://atishi.me)\u200B')
        .setThumbnail('https://cdn.discordapp.com/attachments/939720531492605963/949571956057993256/wampas247.jpg')
        .addFields(
            { name: 'Which marvel character are you :heartpulse:', value: 'Wampas earth616', inline: true },
        )
        .setColor('#5865f2')
        .setTimestamp()
        .setFooter('Wampas Kabra', 'https://cdn.discordapp.com/attachments/939720531492605963/949571956057993256/wampas247.jpg');
        message.channel.send(Embed);
    }
    // atishi small talk (hi, bye commands and functions)
    if (message.content.startsWith(prefix+ "hi") ) {
        // message.reply(`Hiii <3`);
        smallTalkVar=true;
    }
    if (message.content.startsWith(prefix+ "bye") ) {
        smallTalkVar=false;
        message.reply(`Going so soon? Bye :(. Thanks for using the small talk feature on Wampas Bot`);
    }
    if(smallTalkVar) {
        if (!message.content.startsWith(prefix+ "h")) smallTalk(message);
    }
    if(!smallTalkVar){
            //assist commands - date, time, google, inspire
            if (message.content.startsWith(prefix+ "date") ) {
                const date = new Date().toLocaleDateString('en-US');
                
                message.channel.send(`Today's date is ${date}`);
            }
            if (message.content.startsWith(prefix+ "time") ) {
                const date = new Date();
                var time = date.toLocaleTimeString();
                message.channel.send(`It's  ${time} right now `);
            }
            if (message.content.startsWith(prefix) &&  message.content.includes("google")) {
                let src = message.content.replace(`${prefix} google`,"");
                if(src.trim().length===0) {
                    message.channel.send("You must enter something for atishi to google, try something like: atishi google Wampas Bot");
                    return;
                }
                axios.get('https://www.googleapis.com/customsearch/v1',{
                    params:{
                        key: googleKey,
                        cx: csx,
                        safe:"off",
                        q: src,
                    }
                })
                .then(({data})=>{
                    const Embed = new MessageEmbed()
                    .setTitle( `${data.items[0].title}`)
                    .setDescription(`[${data.items[0].link}](${data.items[0].link})`)
                    .setColor('#5865f2')
                    message.channel.send(Embed);
                })
                .catch(()=>{
                    message.channel.send(`Could not find any matches relevant to your search! please try something else`);
                })
            
            }
            if (message.content.startsWith(prefix+ "inspire") ) {
                axios.get('https://api.quotesnewtab.com/v1/quotes/random')
                    .then((data)=>message.channel.send(`"${data.data.quote}"~${data.data.author}`))
                    .catch(()=>message.channel.send('Something went wrong'))
            }
            // tech assist
            // music commands - play, stop, lyrics
            if(message.content.startsWith(prefix+"lyrics")){
                let song = message.content.replace(`${prefix} lyrics`,"");
                var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
                if(song.trim().length===0) {
                    message.channel.send("You must enter a song name. Try: !!lyrics zaalima");
                    return;
                }
                if(regex.test(song)) {
                    message.channel.send("You cannot enter a URL");
                    return;
                }
                // message.channel.send(`song: ${song}`);
                axios.get('https://www.googleapis.com/customsearch/v1',{
                    params:{
                        key: googleKeyMusic,
                        cx: csxMusic,
                        safe:"off",
                        q: song,
                    }
                })
                .then(({data})=>{
                    axios.get(data.items[0].link)
                    .then((res)=>{
                        var $ = cheerio.load(res.data)
                        var data =$('.verse');
                        console.log(data.text());
                        var count = 0;
                        var reps = Math.floor(data.text().length/2000);
                        if(reps>0) {
                            for (i = 0; i < reps; i++) {
                                message.channel.send(data.text().substring(count,count+2000));
                                count=count+2000;
                            }
                            message.channel.send(data.text().substring(count,data.text().length));
                        } else message.channel.send(data.text());
                    })
                    .catch(()=>message.channel.send(`An error occured, please try again later`))
                })
                .catch(()=>{
                    message.channel.send(`An error occured, please try again later`);
                })
            }  
            if(message.content.startsWith(prefix+"play")){
                let song = message.content.replace(`${prefix} play`,"");
                // checking second argument
                if(song.trim().length === 0) return message.channel.send('You need to send the second argument!');
                else {
                    playFunc(message, song)
                }
            }
            if(message.content.startsWith(prefix+'stop')){
                if(!music) return message.channel.send('No song is playing :(');
                stopFunc(message);
            }
            //fun commands - simpmeter, roast, meme
            if (message.content.startsWith(prefix+ "simpmeter") ) {
                // if(message.mentions.members.first=client.user) return message.channel.send("I'm no simp. You on the other hand, 100% :)");
                const mem = message.mentions.members.first();
                if(!mem) return message.channel.send('Mention someone to simp');
                message.channel.send(`${mem} is ${Math.floor(Math.random() * 100)}% simp `)
            }
            if (message.content.startsWith(prefix+ "roast") ) {
                // if(message.mentions.members.first=client.user) return message.channel.send("You can't roast me :)");
                const mem = message.mentions.members.first();
                if(!mem) return message.channel.send(`Please provide a valid member name`);
                message.channel.send(`Fetching your roast..`); 
                axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json')
                    .then((resp)=>message.channel.send(`${mem} ${resp.data.insult}`))
                    .catch(()=>message.channel.send(`An error occured`))
            } 
            if (message.content.startsWith(prefix+ "meme") ) {
                message.channel.send(`Fetching your meme..`); 
                const mainUrl = `https://www.reddit.com/r/dankmemes/random/.json`;
                axios.get(mainUrl)
                    .then((response) => {
                        let res = response.data[0].data.children[0].data;
                        const Embed = new MessageEmbed()
                        .setColor('#5865f2')
                        .setImage(`${res.url}`)
                        message.channel.send(Embed); 
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
            // Moderator - change owner to admin permission
            if(message.content.startsWith(prefix+"kick")){
                if(message.guild.ownerID !== message.author.id) return message.channel.send(`Only admins can kick other users! sorry`);
                // if(message.mentions.members.first=client.user) return message.channel.send("You can't kick me hah!");
                else {
                    const mem = message.mentions.members.first();
                    if(!mem) return message.channel.send(`Please provide valid member names to kick`);
                    message.mentions.members.map((member)=>{
                        member
                            .kick()
                            .then((member) => message.channel.send(`!!kicked ${member.displayName} from the server`))
                    })
                }
            }
            if(message.content.startsWith(prefix+"ban")){
                if(message.guild.ownerID !== message.author.id) return message.channel.send(`Only admins can ban other users! sorry`);
                // if(message.mentions.members.first=client.user) return message.channel.send("You can't ban me hah!");
                else {
                    const mem = message.mentions.members.first();
                    if(!mem) return message.channel.send(`Please provide valid member names to ban`);
                    message.mentions.members.map((member)=>{
                        member
                            .ban()
                            .then((member) => message.channel.send(`!!banned ${member.displayName} from the server`))
                    })
                }
            }
            if(message.content.startsWith(prefix+"new-role")){
                if(message.guild.ownerID !== message.author.id){
                    message.channel.send(`Only admins can create roles`);
                    return;
                }
                let role = message.content.replace(`${prefix}new-role`,"");
                if(!role.trim()) return message.channel.send(`Please give a valid role name`);
                message.guild.roles.create({
                    data: {
                    name: role,
                    color: '#5865f2',
                    },
                    reason: role,
                })
                    .then(()=>message.channel.send(`new role: ${role} created`))
                    .catch(()=>message.channel.send(`An error occured`))
            }
            if(message.content.startsWith(prefix+"del-role")){
                if(message.guild.ownerID !== message.author.id){
                    message.channel.send(`Only admins can delete roles`);
                    return;
                }
                let ROLE = message.content.replace(`${prefix} del-role `,"");
            
                message.guild.roles.fetch()
                .then((res)=>{
                    var flag = 0;
                    res.cache.map((role)=>{
                        if(role.name === ROLE){
                            flag++;
                            role.delete()
                            .then(()=>message.channel.send(`${ROLE} deleted from server`))
                            .catch(()=>message.channel.send('An error occured'))
                        }
                    })
                    if(flag>1) return message.channel.send('Please enter a valid role name');
                })
                .catch(()=>message.channel.send('An error occured'))
                
            }
            if(message.content.startsWith(prefix+"give-role")){
                if(message.guild.ownerID !== message.author.id){
                    message.channel.send(`Only admins can assign roles`);
                    return;
                }
                let role_string = message.content.replace(`${prefix} give-role`,"");
                var res1 = role_string.substr(role_string.indexOf('<'),role_string.length).trim();
                var res = role_string.replace(res1,"").trim();

                const mem = message.mentions.members.first();
                if(!mem)  return message.channel.send(`Please provide valid member names`);
                
                let role = message.guild.roles.cache.find(x => x.name === res);
                if(!role) return message.channel.send(`No role "${res}"exists`)
    
                message.mentions.members.map((m)=>{
                    if(!m.roles.cache.some(role => role.name === res)) {
                        m.roles.add(role)
                        .then(()=>message.channel.send(`Role "${res}"assigned to ${m.displayName}`))
                        .catch(()=>message.channel.send(`An error occured in assigning role "${res}" to ${m.displayName}`))
                    }
                    else message.channel.send(`Role "${res}"already assigned to ${m.displayName}!`)
                })
            
            }
            if(message.content.startsWith(prefix+"rem-role")){
                if(message.guild.ownerID !== message.author.id){
                    message.channel.send(`Only admins can create roles`);
                    return;
                }
                let role_string = message.content.replace(`${prefix}rem-role `,"");
                var res = role_string.substr(0,role_string.indexOf(' '));
                let role = message.guild.roles.cache.find(x => x.name === res);
                const mem = message.mentions.members.first();
                if(!mem) return message.channel.send(`Please provide valid member names`);
                message.mentions.members.map((m)=>{
                    if(m.roles.cache.some(role => role.name === res)){
                        m.roles
                            .remove(role)
                            .then(()=>message.channel.send(`Role ${res} removed for user ${m.displayName}`))
                            .catch(()=>message.channel.send(`An error occured in removing role ${res} for ${m.displayName}`))
                    } else message.channel.send(`${m.displayName} doesn't have a role ${res}`)
                })
            }
            if(message.content.startsWith(prefix+"new-tc")){
                if(message.guild.ownerID !== message.author.id){
                    message.channel.send(`Only admins can create text channels`);
                    return;
                }
                let channel = message.content.replace(`${prefix}new-tc`,"");
                if(!channel.trim()) return message.channel.send(`Please give a valid channel name`);
                message.guild.channels.create(channel,"text")
                    .then(()=>message.channel.send(`text channel "${channel}" created`))
                    .catch(()=>message.channel.send(`An error occured`))
            }
            if(message.content.startsWith(prefix+"new-vc")){
                if(message.guild.ownerID !== message.author.id){
                    message.channel.send(`Only admins can create voice channels`);
                    return;
                }
                let channel = message.content.replace(`${prefix}new-vc`,"");
                if(!channel.trim()) return message.channel.send(`Please give a valid channel name`);
                message.guild.channels.create(channel,{
                    type: 'voice'
                })
                    .then(()=>message.channel.send(`voice channel "${channel}"created`))
                    .catch(()=>message.channel.send(`An error occured`))
            }
            if(message.content.startsWith(prefix+"del-tc")){
                if(message.guild.ownerID !== message.author.id){
                message.channel.send(`Only admins can create text channels`);
                return;
            }
            let channel = message.content.replace(`${prefix}del-tc `,"");
            const fetchedChannel = message.guild.channels.cache.find(r => {return r.type==='text' && r.name === channel});
            if(!fetchedChannel) return message.channel.send(`No such channel found`);
            fetchedChannel.delete()
                .then(()=>message.channel.send(`text channel "${channel}" deleted`))
                .catch(()=>message.channel.send(`An error occured`))
            }
            if(message.content.startsWith(prefix+"del-vc")){
                if(message.guild.ownerID !== message.author.id){
                    message.channel.send(`Only admins can create voice channels`);
                    return;
                }
                let channel = message.content.replace(`${prefix} del-vc `,"");
                const fetchedChannel = message.guild.channels.cache.find(r => {return r.type==='voice' && r.name === channel});
                if(!fetchedChannel) return message.channel.send(`No such channel found`);
                fetchedChannel.delete()
                    .then(()=>message.channel.send(`voice channel "${channel}" deleted`))
                    .catch(()=>message.channel.send(`An error occured`))
            }
            // Marvel 
            // which marvel character are you
            if(message.content.startsWith(prefix+"earth616")){
                const mainUrl = `https://marvel.fandom.com/wiki/${marvelList[randNo(100)]}(Earth-616)`;
                var regex = '^\[[0-9]+$\]'
                axios.get(mainUrl)
                    .then((response) => {
                        var $ = cheerio.load(response.data);
                        var history =$('.mw-parser-output');
                        var stats = $('figure');
                        var appear = $('.pi-horizontal-group')
                        var name = $('aside').first().find('h2').first();
                        var quote = $('.quote').find('span') 

                        const Embed = new MessageEmbed()
                        .setTitle(`You are ${name.text()}`)
                        .setImage(stats.find('a').attr('href'))
                        .setDescription(`-${quote.text().trim().replace(/\s+/g, " ").substring(0,1024)}`)
                        .addFields(
                            { name:`***First Appearance***`, value: `-${appear.text().trim().replace(/\s+/g, " ").replace('First Appearance','')}`},
                            // { name: '***Trivia***', value: `-${history.find('p').slice(1,5).text().trim().substring(0,1024)}` },
                        )
                        .setColor('#5865f2')
                        message.channel.send(Embed);

                    })
                    .catch((err) => {
                        console.log(err);
                    });

            }

            if(message.content.startsWith(prefix+"tech")){
                let src = message.content.replace(`${prefix}tech`,"");
                if(src.trim().length===0) {
                    message.channel.send("You must enter something for atishi to debug");
                    return;
                }
                axios.get('https://www.googleapis.com/customsearch/v1',{
                    params:{
                        key: stackkey,
                        cx: stackcsx,
                        safe:"off",
                        q: src,
                    }
                })
                .then(({data})=>{
                    if(data.items.length>3){
                        const Embed = new MessageEmbed()
                        .setTitle( `Top 3 stackoverflow matches to your query`)
                        .setDescription(`"${src}"`)
                        .addFields(
                            { name: `${data.items[0].title}`, value: `[${data.items[0].link}](${data.items[0].link})`},
                            { name: `${data.items[1].title}`, value: `[${data.items[0].link}](${data.items[0].link})`},
                            { name: `${data.items[2].title}`, value: `[${data.items[0].link}](${data.items[0].link})`},
                        )
                        .setColor('#5865f2')
                        message.channel.send(Embed);
                    }
                    else {
                        const Embed = new MessageEmbed()
                        .setTitle( `Top stackoverflow match to your query`)
                        .setDescription(`"${src}"`)
                        .addFields(
                            { name: `${data.items[0].title}`, value: `[${data.items[0].link}](${data.items[0].link})`},
                        )
                        .setColor('#5865f2')
                        message.channel.send(Embed);
                    }
                })
                .catch(()=>{
                    message.channel.send(`Could not find any matches relevant to your search! please try something else`);
                })
            }
    }
   
})


client.login(process.env.DISCORD_BOT_TOKEN);



app.listen(PORT,()=>{
    console.log('this is local host '+ PORT)
})



/*
TO DO
Music ----
atishi pause and resume
Extra ----
send a hello message on connecting to a new server
console.log(Guilds);
console.log(`${client.user.tag} has logged in.`);
*/
