var http = require('http');
const WebSocket = require('ws');
const user = require('./data/user.json');

console.log("Server started");
const WebSocketServer = require('ws').Server;
// client
const headers = {
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-US,en;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'Upgrade',
    Cookie: user.cookie,
    Host: 'bayvip.net',
    Origin: 'https://bayvip.net',
    Pragma: 'no-cache',
    'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
    'Sec-WebSocket-Version': 13,
    Upgrade: 'websocket',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
};
var fwWs = new WebSocketServer({noServer: true});
var chatWs = new WebSocketServer({noServer: true});
var ronghoWs = new WebSocketServer({noServer: true});
var xocxocWs = new WebSocketServer({noServer: true});
fwWs.on("connection", function (ws, req) {
    const url = req.url;
    if (!url.startsWith('/tx/')) {
        console.log("IGNORE " + url);
        return;
    }
    console.log('Client connected to TX with URL: ' + req.url);
    const wsCli = new WebSocket('wss://bayvip.net/tx/signalr/connect?transport=webSockets&clientProtocol=1.5&connectionToken=Vi6JXnJr1HNGCL9dGpoSG1hThf2yuYEaHpD9%2Bq2YnoVcl2xwiUwOtIJ9AAWD2CF95q2rvm32KKdz4Cpvgzx5z7HoCk4yrGx5AOAg0a8gBvqbmFf6H%2BvOIhO7YReuP1olt99eVwVuL0XL34LXh%2Bb1OBsXW7CG0hw%2FPZXbfc19WpqvJTOILOeq%2FPLO9G0ypyvtoJzx4YMZwxoKgv%2FcmB9QLN2BIggoqPYiG1JSTXGMgfruRypQ8hHPtzqIPHZ8JETNIcswfa%2B5sQ7eHHOf1Ep2R65pg1CzrRjJinXPH4M5hWjpj1ivRIa1p8kX4FfADXiw76SJyuDzqgiZ4UU3OjRq9m3l%2B7JGG2HgCUwBd8AMMneD9lTkqPOkBzMbbPFRFiXnnFxCNjgi3vufwACtKsjuDqOhA%2FjoPdvKX9JsoC1ZU4DgPnmgpwRC6207TfRrTbRAcxqWmC7WKBK1On9oFXKh%2FeMXRvyn1KbExzEeb2%2FQvn2DXnUZE5F8kfsr78bYe2gVQklF1Is2vSxpawskniutatxWdN4%3D&connectionData=%5B%7B%22name%22%3A%22minigametxhub%22%7D%5D&tid=3',
        {headers});
    wsCli.on('open', function () {
        console.log("CLIENT TX CONNECTED......");
    });
    ws.on('message', function (message) {
        console.log("Send forward: " + message);
        wsCli.send(message.toString());
    }, wsCli);
    wsCli.on('message', function message(data) {
        console.log('Receive forward: %s', data);
        ws.send(data.toString());
        if(data.toString().indexOf('currentResult') > 0) {
            var result = JSON.parse(data.toString());
            console.log("----------------------RESULT----------------------------");
            console.log(result.M[0].M);
        }
    }, ws);
});
chatWs.on("connection", function (ws, req) {
    const url = req.url;
    console.log('Client connected to CHAT with URL: ' + req.url);
    const wsCli = new WebSocket('wss://bayvip.net/chat1/signalr/connect?transport=webSockets&clientProtocol=1.5&connectionToken=ZvfeQ%2BfJRs%2FR%2BYv5R8CVeQdKlA5K9VYdLr5Hl%2Ba6jyxocsnt9se%2FKqZ%2BUnk3aBujzvEybB%2FoP1xXR6gsNsCZUmgbWzTUlZnoM3cNFFrmt2V6IKztvrTzObBU4weAvui4ltgC29W5oVssJDwjMASsqgp30ZzaSpB7cuH80zR8btUylTQAg8gRfHYOm6OmUmPq%2BU6It2%2BXLhTSGIv9BRDEb%2BDJNPPxD7Da4zqUnUaDgzgytTxBy44eMgzs0ww8Pk7K5ST8qdWZLq6PUuqxoVPwOlUwmGJAfEuXA1i45w2wPT5MIl%2FC0XiL7H9YhBhstaJyQkp9Tk7QiWXbZVk0NTKPf%2B2fAVWfVZjdiS6Et9IQKZ5AozYz4jYZTLvPrvmuAYfBtfydMaimIIX2gnxIBqr%2Bf4HVFC83FkuUrosXDzW2JR%2FFKHg5Cbjns%2BKj1F%2FfiMua3Ccx%2BS8oljojVQthiEUI%2FUQc7T5L6AWUB7JrZZURNTh1kacQvDF1A3mynTJ5wyS28CDCHkV5vnRZMoT%2BpBmzRHMTyAY%3D&connectionData=%5B%7B%22name%22%3A%22chathub%22%7D%5D&tid=7',
        {headers});
    wsCli.on('open', function () {
        console.log("CLIENT CHAT CONNECTED......");
    });
    ws.on('message', function (message) {
        console.log("Send forward: " + message);
        wsCli.send(message.toString());
    }, wsCli);
    wsCli.on('message', function message(data) {
        console.log('Receive forward: %s', data);
        ws.send(data.toString());
    }, ws);
});
ronghoWs.on("connection", function (ws, req) {
    const url = req.url;
    console.log('Client connected to RONGHO with URL: ' + req.url);
    const wsCli = new WebSocket('wss://bayvip.net/rongho/signalr/connect?transport=webSockets&clientProtocol=1.5&connectionToken=E%2FJ3D2YlQ4RShwXKyslQMcvlPjVAOuLtraSf1XY563hjEyTBZCAXWtBPGHNs92gKeP3l2S3edZUf5N8BsbyONQM3YILklsjnPhr2DAXm0cvXBnp6Ke9cClCeN1GY4MIeyzfRtubusUh%2BFKAdK7IX71CrFv7G8vzQ%2FTSymgtzs2gKyu8%2B0LaaBCorYETqWpT9LnwwvImVxhe5VbtTiWZfBdC8hIGtFKoocYMtHX56RMBw35AIGxVJ6uhrH9VUT2jyk0CrdM4oNrYdiRo98ePf3R2x%2BIPvjFKfVKHyQKa5JPw32GGqUiZh2lz8MMwj4aZzpBqSa1Fb8tEm6ZA%2FV7cKsvrxtr85bdavrneoQqD08m09a0tz7T8UdsGlCPXzEEWE%2FSgpqwAF3Dh0KbOsxRgV0VrKO4N%2FebDjaKmeLqSvHkGqUBG2TYXl%2FP%2FRqh4UpUA3udYZF04nubJaNQom3Nx8IMohHncWc%2F4Reaq7lumSAlGuPMAJ3vn6RcSVxpnhVKBHH5WXiNNFWk%2BaVkvQZKIQ2Eju4Sg%3D&connectionData=%5B%7B%22name%22%3A%22minigamedragonhub%22%7D%5D&tid=8',
        {headers});
    wsCli.on('open', function () {
        console.log("CLIENT RONGHO CONNECTED......");
    });
    ws.on('message', function (message) {
        console.log("Send forward: " + message);
        wsCli.send(message.toString());
    }, wsCli);
    wsCli.on('message', function message(data) {
        console.log('Receive forward: %s', data);
        ws.send(data.toString());
    }, ws);
});
xocxocWs.on("connection", function (ws, req) {
    const url = req.url;
    console.log('Client connected to XOCXOC with URL: ' + req.url);
    const wsCli = new WebSocket('wss://bayvip.net/xocxoc/signalr/connect?transport=webSockets&clientProtocol=1.5&connectionToken=1%2FCzhNqkmd9CHNB1XxlI0rTudAgFe%2Fa6ue%2FNDl6obMhNMB9j4ybnAmQVlAx8f0BywgTRQ2DJRf0NGA%2B0EizSB6DaO580xxnFGF6gAHXS2fsYCwVa5M7cqg00qPI0M8bWP5nXGnZm3t90hR1Uo09biSVfS2gxnrQ0PJBBl0Z6pIrb1UJ%2FpPqZ4MiJ6%2Fbz3XeOnmc5PFUFoUDvdEVsIJx1vADefpxqcYMyZ2Mcwf4iknZuBPkPCmp4bLC8wigDFVL8r0UcxoKSFglPKI3pQBjx9j5LoPGNAnUY6RLwqYdo%2FwnhGmkjKVJG%2BXuLf9wF%2FGp8xSDMmMHTsYhqAgSyU7LW9CdGJt98ZYtgvBNNejqymbBpLO7Y0j8%2B7tjiaS6HhpAxFXEPwxNwW%2BnJxkggIxWZ%2BSY%2FdFFATu887e94zSWIw1iAtc4x9V1cD2NqgfvyyuNUL3Vah4rdEjppRI18SOpnEjNRbrBj2JQkTp4QAGXfBtWwzhQ6u0IofSI5FMx2lgFkiFy5uJWZKh3BBw6QXt0K%2Bgwc36o%3D&connectionData=%5B%7B%22name%22%3A%22minigamexocxochub%22%7D%5D&tid=10',
        {headers});
    wsCli.on('open', function () {
        console.log("CLIENT XOCXOC CONNECTED......");
    });
    ws.on('message', function (message) {
        console.log("Send forward: " + message);
        wsCli.send(message.toString());
    }, wsCli);
    wsCli.on('message', function message(data) {
        console.log('Receive forward: %s', data);
        ws.send(data.toString());
    }, ws);
});
const server = http.createServer();
server.on('upgrade', function upgrade(request, socket, head) {
    const pathname = request.url;

    if (pathname.startsWith('/tx/')) {
        fwWs.handleUpgrade(request, socket, head, function done(ws) {
            fwWs.emit('connection', ws, request);
        });
    } else if (pathname.startsWith('/chat')) {
        chatWs.handleUpgrade(request, socket, head, function done(ws) {
            chatWs.emit('connection', ws, request);
        });
    } else if (pathname.startsWith('/rongho')) {
        ronghoWs.handleUpgrade(request, socket, head, function done(ws) {
            ronghoWs.emit('connection', ws, request);
        });
    } else if (pathname.startsWith('/xocxoc')) {
        xocxocWs.handleUpgrade(request, socket, head, function done(ws) {
            xocxocWs.emit('connection', ws, request);
        });
    } else {
        socket.destroy();
    }
});
server.listen(8010);