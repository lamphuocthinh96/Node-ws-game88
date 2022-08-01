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
    const wsCli = new WebSocket('wss://bayvip.net/tx/signalr/connect?transport=webSockets&clientProtocol=1.5&connectionToken=VNPvYE%2Bko9sZXfvBTcZfCGgbsXMFpzNEhRAQmwRq9Z%2BI%2BLJqEaIWJ9pVFVX670A3uiFjKEsIs%2BhZkTE9R3eVKMOio1v52WXnhrgg621F4tXI7oQsOCE1ODypG6S%2FHRTMcAkaSn1DDlXDW4d2oto4giYiGxaVWulRPaLCOtwWYeLVOW3GzXPYGSCaTHT8hiIhpqWN78LUHMsG1P1aQoEDE5OabDa4A%2FQxnQQDHowiTR8qaf9q8WKu8d%2FDkBmKriGvPrCUSH8dD7aSdK1uUXkPw3XHN4R07BmUv5Tz%2FgU8AelAUWopwnbGQE%2F4TkdKbhKpp1dPdaWecke8dS930MvUN20bdjgF5WZrby%2FVQNwWzajtgJ56NmzKSUCEQVsmQfj5KPjp%2Fw%2FZoyyDG3yN6FHqEQ2Ia1oZvZq%2BHh0WgQ2Djil5D7ubQJovgwl9IbaoyiygtnS3vjvw4%2Blqs8FFUGtK8D4dWJCVT6wgsnAVXdYKTUz55bMY%2F2uPf15hdyjn0PC0lez01mHQqApFoDDd6yJ4aFEVfBM%3D&connectionData=%5B%7B%22name%22%3A%22minigametxhub%22%7D%5D&tid=0',
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
    const wsCli = new WebSocket('wss://bayvip.net/chat1/signalr/connect?transport=webSockets&clientProtocol=1.5&connectionToken=jwMq1zHLYXyjh%2FmPyw1u2ER4KnmzFHbAveWwhmUEl9ExdgL20wmj6v6vS1%2FvjeQGpwGr5FfJQuk6oOaDwC3iETfVbz4W1E0oYgMxcodCwC%2BOz1cL5WHq5Hg2nVU9QytnIi%2F1bGyIOcr661qQhqWHWxUliiT5hwRLUEhN%2FbQ%2FnUy9BLKeWSXCkGzAMGzf4Fpy%2FFp0OysaRPMIVFq%2B3lwzjEQg66I18l07R5RYQPT4CDa5vMQvFxOmaFYNHGDYJG1RihvFheY3JuKkc5PVisTjbo40tcrK6wl6NRyymlIXBYe4OfI3IJKJUjcaQ5HGvaq%2BiUaL0biglBk2w%2F4ZZsAqROGfBaotuwe6GuIKWQbcPuo%2Bey07eFAEMazXMSGee9%2BPEWrNuc3NFilDyj6zChNDnbUNE7waL07%2FLjxFNiJZwcS6CrqZWn1vxVoig%2BNPSMdkP7wG42DS0rghd5jc83qSOfSt2aj7B3AU%2B4Hc2GUFd8uK9nJtt%2B7Zlg0k2njOAaJvS9qPU5YwGPhfKunlWvp9Ib73UEw%3D&connectionData=%5B%7B%22name%22%3A%22chathub%22%7D%5D&tid=6',
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
    const wsCli = new WebSocket('wss://bayvip.net/rongho/signalr/connect?transport=webSockets&clientProtocol=1.5&connectionToken=ueo3IYMpNUd88drNfsxlAQsBhb5SW%2Fwvw5qJFDynJPXQ9WeOSVZPKP%2BYRFP49fwJp8rXwnMzQGSOGbMCCtVwUEyCB6iCaH2S9gvGsRjJtj55qhVrtcnYgqM4Ww1kb0tSXCOLlJ2Cq8HXD33zXrjEVEqAMn%2F3bkH7EyVvTl5LjhTFe7EMn7cDBVMMzu%2B5afzzzRXvWFIVi2W2UwaUaAZfjyvk6h3P5h%2Bzoy5dmICXEXAOchOS87%2FXQYsl3TfW2qMw4h%2F82GF%2Bd0fv7dJ7hJXAOxYhXW5c01KgJx3iCWIh1LqmfMLYaACLNj3VEwq%2FVxIa%2Ft8k0jYW8Pa1yK7vJk75XsWFgPi9rdnTLWMhgZ%2BcaSx2i108HQbwx%2BnrR1VM7ovzRPeW6RCVNJ09XM8R5ZdTvTrZCyWEvMg9chRTt6FjdGuk159%2F85PUklrU0sbhr77M741gWrHiRJ8Vrw6PLLPzIjnnJMrydUgYeQxMYmzNTXAaqLQy%2B9UI9p27mn2f2KCZ7B7jgSkDIE5oTqT2eFbnx1dRdJM%3D&connectionData=%5B%7B%22name%22%3A%22minigamedragonhub%22%7D%5D&tid=10',
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
    const wsCli = new WebSocket('wss://bayvip.net/xocxoc/signalr/connect?transport=webSockets&clientProtocol=1.5&connectionToken=G7leA7eMuIPj9FpLk3mGAjDGXch%2FJfW0NHqdqTAdX96MyfyP4SLnzyQbGWkxgI2A8ue5cjNmJt%2BH1GDdCQsYGuaGPZkawqXZwTTOQc%2B%2FmR%2BANQgCh4x%2BFqcSSfHFMTYRYlh3VH4j%2BrGKkKzqQ4EBXCGv5tbEUf%2FPBuLgChuNqy2qp07CvAHtwyrQnX%2Bnd9CCs1UiAlEBuQwYADbdHCFsfKPvKxs7fQxFmKnzNSLb0Ac3m7W1K%2B%2BBjjHnDklx%2BlIrKV5abYBNKWT3JLJF8GBx23emyLn5zei7NPeYytqErJfVH%2FVfiXanKZag2ZwgUMNFdz2as1hnFPb2vzseYBv2FhMX0FCIeAiViG1zV9SY3so8xKmsUphffk8qFnZRyfgg%2B360hYw%2BglZedAOLc6%2Fai4KHqU6qEaK6u2jwVoPnbcQYHpycB2VKGkU%2FrT7e0C194ZLQwqMorgplra9DFzpwWCPA1RDfhILK3W6rGj3ymHFquzQxXLCZSC48tvluQRHhcJn5Yqi7813PleVgzrOzSW45yMk%3D&connectionData=%5B%7B%22name%22%3A%22minigamexocxochub%22%7D%5D&tid=0',
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