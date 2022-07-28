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
    Cookie: '_ga=GA1.1.1668809280.1659016448; .fanvip=30CBD5BC27C7A3DDE2FC69A5EBE647B665085DDBE97D0C82841ECD3B03A7EF6B483C72F6D0CB595D845C343CC1660052D88E16AC4844353B983ED257B99A399B02FCBD2BA8CADCD61AAE498E0001A83B7C1BC01FC516A239ADF1A73CF239D5E4FC2EFC8DB237FE21D7442FBA5C8616CBA023855FB231CF2EDEA8B765E6F78CDCE6AF11DE75E49202EEFD345F30659D589B5A2F871F438EAA5CD904BFF608FA40FC7D2E69B83E9BA7C2803268A1863B3CDC4EF765108F55ED7AB3B4AC49FB348D8F156794B702AC325567DAD0710314090F9F23F0E5706FE2BE87EDEEDDD64CE56FBCE72B3B2FE45296C320710E49EA961986D02C9252D0124D2F40F7535883929A6D5D36130976C658F11CD58E6FF471E20C92176E5F75F69108B75731996135DE167BA4FF7E50867685EDC425615E5234D70AB5AAF6A37CF06B79C7E5848E04C597B6E02A9507FCDC8945D5114DBDBA53C9AEC10BD7E949B7DA667E429C1120CE2123020E24E27BC7DD2C808BFC13A5BF309F75ED4C6A81E97B4D88087CAF1412E921B17482E4A2D4F9D53F76ADE2C33CD7F02111E36964B815F75E54A538E3EBFB78C2D089E837A0545BB7259FB45A599EF6D8AA190A7A4312A76DB41A7A3207650CCB8ED7A4E47AE9A6D83787EFCAAEED475E9F45A732773FA9001586DC86D13BE69FDCFF5E3E354BA36E7916CB5A4B963C01BB9393EA44A916E8C10E69E484FFC43C4840A6180BFFA235606B24535491765F29B351E2130F8CFF7D1B1A1F9456D0B7E75D1779C0E674E1784A466A1FBBB2CD110173F19EFBF7A413993C65281B174D76DCE4C982D0FBED4FC1CC427F502B8437D9132C79FA3F091613EC8DA78F1FA50C343023E0B2E9F3190848631CADB947F8FFB6BBFED61C78EBA26FE1B01E9C154EA47493ADDD3D62E75E483CC4F5766BE51E0F9EBE197ABA763CF17B29ABBE3A63F893FB1CA6FF7F09E55BC40302B52D46C08AC733462D03718CE5F40E4A60BB5E2A63D2D0F9F9DFDF9A026857366A61; _ga_J65JDTR6Z7=GS1.1.1659026317.3.1.1659027387.0; _ga_20FD88L456=GS1.1.1659026317.3.1.1659027387.0',
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
    const wsCli = new WebSocket('wss://bayvip.net/tx/signalr/connect?transport=webSockets&clientProtocol=1.5&connectionToken=TGiKF2bpdLgnzs%2FmGQIkFqmEtlK9RHaqsYn0g8GQprzwAiPRxwoI1cGmjrAH1TG3nnXhm4eIsFJECVJcmFQWJoLcC7nmG7naJTHtCglZsPhvcnNdCVGOqyS%2Fn%2B7NFDeqBK5r2IBYNlznarOVHASIyOgCjt5%2BLSUuMUH4F%2FrwUSh9C7zu0ZuVaPRUOKaxUSYppoID8Mm5IVIWJe5PsC3MKLA%2B4EVRhLPTJ0i%2BnM5WW1g0BIHD%2BW5AJgivdFG%2FiI7StAboSRqfU%2Fx6dgY58F6kFJHpTr9kRPTHjKPhk6hXpqLNkclcNPLBFJsU%2F3vD1lni9I6uk4DebJM5j4b3VFWMeo5Qjw%2BSbYHBo8TsJwLOPetyJD2tkioX6b5Q2MrGA6VWAX0K%2FR9bTmTMH0yjL1q87CR7RrK8yPYmqEhiaaZROg281xSLNITijJaJ7XKd3dqvJo6k%2B1brRpcfCCozAiibDtkAWRkrWeHx519NlNHkJje3UsuJ1MSii4d64e9qL5ma788oVshSFW6pJ6ZTa5lU70qcGsk%3D&connectionData=%5B%7B%22name%22%3A%22minigametxhub%22%7D%5D&tid=1',
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
    const wsCli = new WebSocket('wss://bayvip.net/chat1/signalr/connect?transport=webSockets&clientProtocol=1.5&connectionToken=ZoOH0ILG58W99VEazB%2FOH1TPDlB%2BK6QaOxERsF5ZX1SyWTZvaeHWjBOveYlaIAnMLK3%2BLktyWvyz1QxGHGIjVA08AzW52NQ7EH6ykBdVQ5izm40UNPFpmha1cY2sU9CakOat7VOgaO%2B8V3VYPoNUe8pjV8O8tLt35SPD%2FdMzhKxNUtK36xy2QbIH6GlyBhWBsQnqMIHe2wHy94NNHM77MJkLaXY%2BhMEyfFdcjJ0hsxIJ4LioA50kPVdPMA07csIRdj4hGQiDWJvn8N3hUvL1SjwnY%2Bep1KC%2FlDnBnkkJkh0ouPErEIhos5JpziwgRFkNoREMBhpt7i4afbUxJs%2BWIC9WcFPouSy6P1f%2Fa5yx9SkIzukI%2B%2B4OAUguKyiUUaozZN3xCeBbg%2BGpXrr9xSrNiCbSE%2B%2FizLwdCyeN4wC%2Bjh7RgWuBq0%2F%2B%2FvCEuQG8%2BvOKIMdEZkzDqWv2PUm7kU%2BHtB%2FO%2BcYM6denCAo3JJecqC7RnOR6L6gfMDwr2vs5enDRZZB6QQHd7UJSIY2ag0Us1%2BNJb78%3D&connectionData=%5B%7B%22name%22%3A%22chathub%22%7D%5D&tid=10',
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
    headers.Cookie = '_ga=GA1.1.1668809280.1659016448; .fanvip=30CBD5BC27C7A3DDE2FC69A5EBE647B665085DDBE97D0C82841ECD3B03A7EF6B483C72F6D0CB595D845C343CC1660052D88E16AC4844353B983ED257B99A399B02FCBD2BA8CADCD61AAE498E0001A83B7C1BC01FC516A239ADF1A73CF239D5E4FC2EFC8DB237FE21D7442FBA5C8616CBA023855FB231CF2EDEA8B765E6F78CDCE6AF11DE75E49202EEFD345F30659D589B5A2F871F438EAA5CD904BFF608FA40FC7D2E69B83E9BA7C2803268A1863B3CDC4EF765108F55ED7AB3B4AC49FB348D8F156794B702AC325567DAD0710314090F9F23F0E5706FE2BE87EDEEDDD64CE56FBCE72B3B2FE45296C320710E49EA961986D02C9252D0124D2F40F7535883929A6D5D36130976C658F11CD58E6FF471E20C92176E5F75F69108B75731996135DE167BA4FF7E50867685EDC425615E5234D70AB5AAF6A37CF06B79C7E5848E04C597B6E02A9507FCDC8945D5114DBDBA53C9AEC10BD7E949B7DA667E429C1120CE2123020E24E27BC7DD2C808BFC13A5BF309F75ED4C6A81E97B4D88087CAF1412E921B17482E4A2D4F9D53F76ADE2C33CD7F02111E36964B815F75E54A538E3EBFB78C2D089E837A0545BB7259FB45A599EF6D8AA190A7A4312A76DB41A7A3207650CCB8ED7A4E47AE9A6D83787EFCAAEED475E9F45A732773FA9001586DC86D13BE69FDCFF5E3E354BA36E7916CB5A4B963C01BB9393EA44A916E8C10E69E484FFC43C4840A6180BFFA235606B24535491765F29B351E2130F8CFF7D1B1A1F9456D0B7E75D1779C0E674E1784A466A1FBBB2CD110173F19EFBF7A413993C65281B174D76DCE4C982D0FBED4FC1CC427F502B8437D9132C79FA3F091613EC8DA78F1FA50C343023E0B2E9F3190848631CADB947F8FFB6BBFED61C78EBA26FE1B01E9C154EA47493ADDD3D62E75E483CC4F5766BE51E0F9EBE197ABA763CF17B29ABBE3A63F893FB1CA6FF7F09E55BC40302B52D46C08AC733462D03718CE5F40E4A60BB5E2A63D2D0F9F9DFDF9A026857366A61; _ga_J65JDTR6Z7=GS1.1.1659026317.3.1.1659027387.0; _ga_20FD88L456=GS1.1.1659026317.3.1.1659027387.0';
    const wsCli = new WebSocket('wss://bayvip.net/rongho/signalr/reconnect?transport=webSockets&groupsToken=82hlRkxNWsBsgodJs18DmvXHi4z%2FAWMAPp1%2BI%2FKWgu6ZMB4ZSaN%2FnJ0RvisfZYknVDklpJ4%2BPZCBAsRhaE5%2F6xIj8EGgX63OwaIAu4CTfWneHjvaQKrTbiifXK7zhNV5UvK1AA%3D%3D&messageId=d-BE74B738-B%2C574%7CCIz%2C1D%7CCFK%2C0%7CCI0%2C25%7CR%2C354A&clientProtocol=1.5&connectionToken=U9kJDuRCIcEZrIwr6tB1cnwAF3esG1%2BGYlwfBek%2FyV39nsmwMRTAw2NMTFw9soo9US%2BTj4vzZbO2WDHQCXaNCtabk9EBogmVNeTC%2FUpvVqGI2qgdDPAbxnDuGuSy9nnmYoxYUrJ7DE05c5JMyNVBsVftvE7Axteqwltfgxc5VC4TOmBaA4svSh9Ao533Hahow2GgVVF%2BV7LgLWnr3NdQiOXEsE3PeUhatxkRl3oR8J2gyzQPkCIhqt5XmZNaaUmlj20zAIW8rVUduu%2Fm%2BB5Qtdyt8X6h2GvTEWbtQCBrmyO7XY3083hDQ3KcncXilRONIqbgAogvWc8LBidGqn9E259wB2EcBhoRRz0rN%2BZAseiGLVQFGrDv2%2FUkSd7%2FISNMnr%2ByTkNd%2FWiCzR9k8LevCUHgCZzVU0pEd%2BMmP0Pol7MBzehqw%2BEjxWolXsOz%2B4TgGN1HleWZlva6UBHrJA3XwmPAMwY%2FBU4vT%2BrXpI9p52bMJLG3YcQCzkTEuCWuePl8j5F%2BMnlrF88n5PoAhCFh3ielhpQ%3D&connectionData=%5B%7B%22name%22%3A%22minigamedragonhub%22%7D%5D&tid=1',
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
    const wsCli = new WebSocket('wss://bayvip.net/xocxoc/signalr/connect?transport=webSockets&clientProtocol=1.5&connectionToken=WTLBkyOyrL9IlIzfRNLeQNrNRlm3yWGXNhBhrwiF4mS0JC%2BLy4cPIkgxuxfc8OuTRD0Z%2FcTBSz6l6VtEv7ByKkywj03%2F6FH%2BE8saaUSJOV4asYTndVMoh7vraUuIJkDpS5GoeiLEvzFdMVTMIjQ4RL%2BncTG9fmq9CbLXGYpPOJ6vTrt8aXJXLwB5b4g5xr0%2B%2F4%2FAxENOpNZHb4rAW22QojReeKG44RbqvqHC1FPAGV%2F9tu6bZB4EQnADoT5WU3FWSg3wdcOZbgtB4Qb5oYb5GjEjF24tNMG9rihMhlfa72vCVtNtrqvEADolPTGsg%2Bh1wVOc9Sj8nJr4HIWOypienQF79tKQVExk0h1V91TQ2qXZagU%2FinwkGs3zvA2duz3SvfYngFpiW9cLeOuVyXNtFj%2BpMCXd4DaE%2FjJQNwzhmY7Y1X7akGCrmEiZI9056kbpSisF0VGxQcbgjUYbSKLnMbIVYxMOWRc2tfegNM7bbjBicZazrn%2BhqoJW9gl87B2Rnu2HLL2wjrupJs39HoUWMqqPURQ%3D&connectionData=%5B%7B%22name%22%3A%22minigamexocxochub%22%7D%5D&tid=0',
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