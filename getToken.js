
const promiseTx = new Promise((resolve, reject) => {
    var https = require('follow-redirects').https;
    var fs = require('fs');

    var options = {
        'method': 'GET',
        'hostname': 'bayvip.net',
        'path': '/tx//signalr/negotiate?clientProtocol=1.5&connectionData=%255B%257B%2522name%2522%253A%2522minigametxhub%2522%257D%255D&_=1659117626846',
        'headers': {
            'Cookie': user.cookie
        },
        'maxRedirects': 20
    };

    var req = https.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function (chunk) {
            var body = Buffer.concat(chunks);
            try {
                if(!body.toString().startsWith('{'))
                    reject(body.toString());
                var json = JSON.parse(body.toString());
                resolve(json);
            } catch (e) {
                reject(e);
            }
        });

        res.on("error", function (error) {
            console.error(error);
            reject(error);
        });
    });
    req.end();
});
Promise.all([promiseTx]).then(value => {
    console.log("promise result");
    console.log(value);
});