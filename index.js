var http = require('http');
const WebSocket = require('ws');

var wss = require('./txWs');
console.log("Server started");
const WebSocketServer = require('ws').Server;
// client
const headers = {
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-US,en;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'Upgrade',
    Cookie: '_ga=GA1.1.639045066.1659105634; .fanvip=B75E3970C2DC1D0BA8A869CD9E5E189A169D254226D221C8469231CBC95B3071018EF9F037CD10E35604E18199B9DE43BDCFEA832FEA8123D6D5DA957648D715388C8484BD619419AE7B1236276506103B596C4EA0770652F3E68FF3DC6F03378DCE8A5D7F4CDA10399FCF1F56CCA165BEB9C6F05FC4E8D62E444E3A4DBC7EEB2107692D68A8C56F97B5C113ED3F9CCC8486D0DF8666789ECA5548F56F8D2EBC822F80DF78D88924CEF29EF6FA0FEAF225C9E71DC304117A03CEECCB9A07DB067DDB87B58D37B366A3943FC30771253B06D60FA6E347D311B12045C77281207787B4768FE662F16FF9867DD158C3255D9853BBB40DD409764CF7DE54925C37705A88BE5CFD51C14858C48290C82BE57BF0CE8AA653BAD234AC33605CEACB482518BDE5AD360D5694516A80D929621B660331BCE142A40CC24FDE635B9EB3FF021D6229846D47AE4BF04FD441128D4A2A607430E4BD5AE2F43B6AFE2791ABBBB83EC0EB0F65981D027A1D8B42427B1815511841DC932F6BC0FE06F40C0F12E71AD8CED160AA52D859420AC94AF69936DADF74CA38C549540F74B3AC5DB8F080567BC5BDC859F1E800E92B0DE6EECAED69F2604CFE69F0A0A6EF60BB2735052C9C272798E2764055AF764929598297E9064828C39688CEC29D7688ABA7284A2365323C6EF8AC9DFD2D47BC1FE4106DA2DFB4525F9D0A95C65D8EE1FE7E8BB00C677452AE841E754A13F1EB5E26BF4188386D18ED3BC5871DA424A989CE37902A4BABAC6CD5EE0C4A89B8CC8ADD0BAA07E123947A7DEB906D1D9F00033241559E220CE875FFD936D3468900C8416D8E6D1755B71A19B7A73229AADE3AA432546AC4CF8DBBF702D9F072942B880E2F09DF4B15FC7DEC39430290592746FCA2267C568EDA02481F403045FE3C1F629F3907B25EC3932AD097BF1A006EE68EF8E1D613D263BA6808FA651111D787C585A0F52CF69E23D3CB55EF93CCE89E1D1F0D7EED7D54D515C32E3C950E48FD46207645642032F2AB; _ga_J65JDTR6Z7=GS1.1.1659105633.1.1.1659106113.0; _ga_20FD88L456=GS1.1.1659105633.1.1.1659106113.0',
    Host: 'bayvip.net',
    Origin: 'https://bayvip.net',
    Pragma: 'no-cache',
    'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
    'Sec-WebSocket-Version': 13,
    Upgrade: 'websocket',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
};
var fwWs = new WebSocketServer({noServer: true});
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
    }, ws);
});
var chatWs = new WebSocketServer({noServer: true});
chatWs.on("connection", function (ws, req) {
    const url = req.url;
    console.log('Client connected to CHAT with URL: ' + req.url);
    const wsCli = new WebSocket('wss://bayvip.net/chat1/signalr/connect?transport=webSockets&clientProtocol=1.5&connectionToken=L3g6bgtGfm4%2Fnq8bvb41DE0GBGhnrTP9QAyuZTWm0MS6va9%2BY4DBsZ6327r76Zl%2BfUbev4j1WFGZd9dK%2FIZZPsOk%2BAC5x4awn3caIQMDiUwihMUuQjYoZd1aPZDiW6p0%2FmeLtYClts6JHy%2FqIPRp%2BLPiblzJ96eOiYUgO5RdFfgYDoTrgZHPwGihKr2bVjEpR2%2BJrZwrPBKvSJVfdS2zXbhoe%2BwScJUpWU6zJ4QnuKF7efOryh3y9x%2B5uYGtxgMxZ6PR6qg4GVGEzUuDhaNtVZlDgT7DXFzQ9VR9WHY7JQQT9b8wz1orNtbVNGvSD%2BkLWIJle6oV5csVYOpbx8fILpNvvxZTvs2x5hby8b8OjPUhLY2beCrvqLof9u6tX25b%2F%2Fm%2Bc77zN0f%2FuhXXIcVDUksUzwIV3XVNGOtMZKGTLqDj%2BcubAZrTb%2FIYpuDzGo4W%2FSPHjcSgeSFyC%2F1YSHv7yUWwReEgpbXW2aX2nQRhbQdvd8l%2FmXgvbxbaw4rE%2BJaCulJRAcQzV%2FyBKYssxgWwoT4O%2FSQ%3D&connectionData=%5B%7B%22name%22%3A%22chathub%22%7D%5D&tid=7',
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
var ronghoWs = new WebSocketServer({noServer: true});
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
var xocxocWs = new WebSocketServer({noServer: true});
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