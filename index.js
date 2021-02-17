const DomParser = require('./node_modules/dom-parser');
const fs = require('fs');
const fetch = require('./node_modules/node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
const conf = require('./conf.json');
const token = conf.discord_key;
const parser = new DomParser();
let runonce = {};
const CallBot = async (msg) => {
    if(client.readyAt !== null) {
        const user = client.users.fetch(conf.discord_uid);
        user.then((userf) => {
            userf.send(msg);
        });
    }
    else {
        client.on('ready', () => {
            const user = client.users.fetch(conf.discord_uid);
            user.then((userf) => {
                userf.send(msg);
            });
        });
    }
}
const ErrorMessage = async () => {
    if(client.readyAt === null) {
        client.on('ready', () => {
            const user = client.users.fetch(conf.discord_uid);
            user.then((userf) => {
                userf.send('Pyynnöt palvelimelle eivät mene läpi! <@' + conf.discord_uid + '>');
            });
        });
        return 'error';
    }
    const user = client.users.fetch(conf.discord_uid);
    user.then((userf) => {
        userf.send('Pyynnöt palvelimelle eivät mene läpi! <@' + conf.discord_uid + '>');
    });
    return 'error';
}
const CheckProduct = async (product) => {
    const pdata = await require('./tuotteet/' + product + '.json');
    if(!pdata.link) {
        return 'Please set link!'
    }
    fetch(pdata.link, {
        method: 'get',
        headers: { 'Content-Type': 'text/html'}
    })
    .then(async (res) => {
        if(res.status !== 200) {
            return await ErrorMessage();
        }
        return res.text();
    })
    .then(async (body) => {
        if(body === 'error') {
            return;
        }
        const d = await require('./date.js');
        console.log(d.day() + '.' + d.month() + '.' + d.year() + ' - ' + d.hours() + ':' + d.minutes() + ':' + d.seconds());
        let dom = await parser.parseFromString(body);
        let response = await dom.getElementsByClassName('button--purchase');
        if(response.length > 0) {
            if(runonce.hasOwnProperty(pdata.ro_name)) {
                if(runonce[pdata.ro_name] === false) {
                    setInterval(() => {
                        CheckProduct(product);
                    }, 60000);
                    runonce[pdata.ro_name] = true;
                }
            }   
            console.log(pdata.msgfound);
            await CallBot(pdata.msgfound + ' <@' + conf.discord_uid + '> ' + pdata.link);
        }
        else {
            console.log(pdata.msgnotfound);
        }
    });
}
fs.readdir('./tuotteet', (err, files) => {
    files.forEach(file => {
        fs.readFile('./tuotteet/' + file, 'utf8', (err, result) => {
            let jsond = JSON.parse(result);
            runonce[jsond.ro_name] = false;
            if(jsond.name + '.json' === file) {
                CheckProduct(jsond.name);
            }
        });
    });
});
setInterval(async () => {
    fs.readdir('./tuotteet', (err, files) => {
        files.forEach(file => {
            fs.readFile('./tuotteet/' + file, 'utf8', (err, result) => {
                let jsond = JSON.parse(result);
                if(jsond.name + '.json' === file) {
                    CheckProduct(jsond.name);
                }
            });
        });
    });
}, 600000);
client.login(token);