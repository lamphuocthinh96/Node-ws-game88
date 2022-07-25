/*
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Thinh!\n';
  console.log(req.headers);
  /!*var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'https://account.b29.win/Api/Account/LoginMobile',
    'headers': {
      'accept': ' *!/!*',
      'accept-encoding': ' gzip, deflate, br',
      'accept-language': ' vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7',
      'cache-control': ' no-cache',
      'content-length': ' 125',
      'content-type': ' application/json; charset=UTF-8',
      'cookie': ' _ga=GA1.2.154339168.1628910930; _gid=GA1.2.1069828179.1629473961',
      'origin': ' https://b29.win',
      'pragma': ' no-cache',
      'referer': ' https://b29.win/',
      'sec-ch-ua': ' "Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
      'sec-ch-ua-mobile': ' ?0',
      'sec-fetch-dest': ' empty',
      'sec-fetch-mode': ' cors',
      'sec-fetch-site': ' same-site',
      'user-agent': ' Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
    },
    body: '{"PasswordMd5":"a5fdc692d22754026ada0f135ebf4070","Username":"toponly","Captcha":"","Verify":null,"ServiceId":1,"SourceId":1}'

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    // console.log(response.headers);
    console.log("------------------------")
  });
*!/

  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});*/
console.log("Server started");
var Msg = '';
var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({port: 8010});
wss.on('connection', function (ws, req) {
    // console.log(req);
    ws.send(JSON.stringify({"C": "d-87022C60-C,76|Qf,0|Qg,0|Qh,1", "S": 1, "M": []}));
    ws.on('message', function (message) {
        ws.send(JSON.stringify({"C": "d-87022C60-C,76|Qf,0|Qg,0|Qh,2", "M": []}));
        console.log('Received from client: %s', message);
        let json = JSON.parse(message);
        if (json.M === 'getCurrentRooms') {
            ws.send(JSON.stringify({
                "C": "d-87022C60-C,76|Qf,2|Qg,0|Qh,3|S,47C",
                "M": [{
                    "H": "miniGameTXHub",
                    "M": "currentRoomsInfo",
                    "A": [[{
                        "BetType": 1,
                        "TotalAccount1": 97,
                        "TotalBetValue1": 38645420,
                        "TotalAccount2": 99,
                        "TotalBetValue2": 59022000,
                        "IsChanged": true
                    }]]
                }, {
                    "H": "miniGameTXHub",
                    "M": "currentSession",
                    "A": [{
                        "GameSessionID": 4478149,
                        "GameStatus": 1,
                        "RemainWaiting": 0,
                        "RemainBetting": 53,
                        "NextGameSessionID": 0
                    }]
                }]
            }));
        }
        if (json.M === 'GetCurrentResult') {
            ws.send(JSON.stringify({
                "C": "d-87022C60-C,76|Qf,0|Qg,0|Qh,3|S,47C",
                "G": "Z6XJhout7YES8p4SzGz3kWnmN1V5hV+g4C2a2ArbaaZsLgXc46EUPofXQ7RHYSsNKHkvi4rkdKKzIViWDEjwmYoKdaqobHXB+5DCFSHbIJzotkllb8hOdMBwRl4Me72AjSsCQg==",
                "M": []
            }));
            ws.send(JSON.stringify({
                "C": "d-87022C60-C,76|Qf,3|Qg,0|Qh,3|S,47C", "M": [{
                    "H": "miniGameTXHub",
                    "M": "gameHistory",
                    "A": [[{
                        "GameSessionID": 4478148,
                        "DiceSum": 13,
                        "Dice1": 5,
                        "Dice2": 6,
                        "Dice3": 2,
                        "LocationIDWin": 2
                    }, {
                        "GameSessionID": 4478147,
                        "DiceSum": 14,
                        "Dice1": 4,
                        "Dice2": 4,
                        "Dice3": 6,
                        "LocationIDWin": 2
                    }, {
                        "GameSessionID": 4478146,
                        "DiceSum": 12,
                        "Dice1": 3,
                        "Dice2": 3,
                        "Dice3": 6,
                        "LocationIDWin": 2
                    }, {
                        "GameSessionID": 4478145,
                        "DiceSum": 16,
                        "Dice1": 6,
                        "Dice2": 5,
                        "Dice3": 5,
                        "LocationIDWin": 2
                    }, {
                        "GameSessionID": 4478144,
                        "DiceSum": 9,
                        "Dice1": 2,
                        "Dice2": 4,
                        "Dice3": 3,
                        "LocationIDWin": 1
                    }, {
                        "GameSessionID": 4478143,
                        "DiceSum": 12,
                        "Dice1": 1,
                        "Dice2": 5,
                        "Dice3": 6,
                        "LocationIDWin": 2
                    }, {
                        "GameSessionID": 4478142,
                        "DiceSum": 10,
                        "Dice1": 3,
                        "Dice2": 5,
                        "Dice3": 2,
                        "LocationIDWin": 1
                    }, {
                        "GameSessionID": 4478141,
                        "DiceSum": 11,
                        "Dice1": 5,
                        "Dice2": 2,
                        "Dice3": 4,
                        "LocationIDWin": 2
                    }, {
                        "GameSessionID": 4478140,
                        "DiceSum": 9,
                        "Dice1": 4,
                        "Dice2": 1,
                        "Dice3": 4,
                        "LocationIDWin": 1
                    }, {
                        "GameSessionID": 4478139,
                        "DiceSum": 14,
                        "Dice1": 4,
                        "Dice2": 5,
                        "Dice3": 5,
                        "LocationIDWin": 2
                    }, {
                        "GameSessionID": 4478138,
                        "DiceSum": 12,
                        "Dice1": 5,
                        "Dice2": 1,
                        "Dice3": 6,
                        "LocationIDWin": 2
                    }, {
                        "GameSessionID": 4478137,
                        "DiceSum": 6,
                        "Dice1": 1,
                        "Dice2": 3,
                        "Dice3": 2,
                        "LocationIDWin": 1
                    }, {
                        "GameSessionID": 4478136,
                        "DiceSum": 12,
                        "Dice1": 1,
                        "Dice2": 5,
                        "Dice3": 6,
                        "LocationIDWin": 2
                    }, {
                        "GameSessionID": 4478135,
                        "DiceSum": 13,
                        "Dice1": 3,
                        "Dice2": 6,
                        "Dice3": 4,
                        "LocationIDWin": 2
                    }, {
                        "GameSessionID": 4478134,
                        "DiceSum": 12,
                        "Dice1": 4,
                        "Dice2": 5,
                        "Dice3": 3,
                        "LocationIDWin": 2
                    }, {
                        "GameSessionID": 4478133,
                        "DiceSum": 11,
                        "Dice1": 1,
                        "Dice2": 5,
                        "Dice3": 5,
                        "LocationIDWin": 2
                    }, {
                        "GameSessionID": 4478132,
                        "DiceSum": 8,
                        "Dice1": 2,
                        "Dice2": 4,
                        "Dice3": 2,
                        "LocationIDWin": 1
                    }, {
                        "GameSessionID": 4478131,
                        "DiceSum": 11,
                        "Dice1": 3,
                        "Dice2": 4,
                        "Dice3": 4,
                        "LocationIDWin": 2
                    }, {
                        "GameSessionID": 4478130,
                        "DiceSum": 9,
                        "Dice1": 4,
                        "Dice2": 3,
                        "Dice3": 2,
                        "LocationIDWin": 1
                    }, {
                        "GameSessionID": 4478129,
                        "DiceSum": 6,
                        "Dice1": 2,
                        "Dice2": 2,
                        "Dice3": 2,
                        "LocationIDWin": 1
                    }]]
                }]
            }));
            ws.send(JSON.stringify({
                "C": "d-87022C60-C,76|Qf,5|Qg,0|Qh,3|S,47C",
                "M": [{"H": "miniGameTXHub", "M": "resultOfDragon", "A": [{"IsWin": false, "count": 0}]}]
            }));
        }
        setInterval(function () {
            /*ws.send(JSON.stringify({"C":"d-87022C60-C,2D|Lc,0|Ld,0|Le,3|S,1AA","G":"XOVnhHBAMWy+DYRabqIBA4xjHc89QWd6TeVmmm+F2OD2I5R47tAX0VfL1VVNW7A5Z4Sz7YI8rAKIVx6Ym174tZNU0QJwAFMBzm/kQovqaFEty9MfyDbpyK1T1KyKuFTC9+kHpA==","M":[]}));
            ws.send(JSON.stringify({"C":"d-87022C60-C,2E|Lc,6|Ld,0|Le,3|S,1AC","M":[{"H":"miniGameTXHub","M":"gameHistory","A":[[{"GameSessionID":4478124,"DiceSum":7,"Dice1":2,"Dice2":1,"Dice3":4,"LocationIDWin":1},{"GameSessionID":4478123,"DiceSum":13,"Dice1":1,"Dice2":6,"Dice3":6,"LocationIDWin":2},{"GameSessionID":4478122,"DiceSum":10,"Dice1":4,"Dice2":5,"Dice3":1,"LocationIDWin":1},{"GameSessionID":4478121,"DiceSum":11,"Dice1":4,"Dice2":3,"Dice3":4,"LocationIDWin":2},{"GameSessionID":4478120,"DiceSum":15,"Dice1":5,"Dice2":6,"Dice3":4,"LocationIDWin":2},{"GameSessionID":4478119,"DiceSum":10,"Dice1":2,"Dice2":6,"Dice3":2,"LocationIDWin":1},{"GameSessionID":4478118,"DiceSum":9,"Dice1":1,"Dice2":3,"Dice3":5,"LocationIDWin":1},{"GameSessionID":4478117,"DiceSum":11,"Dice1":5,"Dice2":3,"Dice3":3,"LocationIDWin":2},{"GameSessionID":4478116,"DiceSum":9,"Dice1":3,"Dice2":2,"Dice3":4,"LocationIDWin":1},{"GameSessionID":4478115,"DiceSum":9,"Dice1":4,"Dice2":2,"Dice3":3,"LocationIDWin":1},{"GameSessionID":4478114,"DiceSum":13,"Dice1":6,"Dice2":1,"Dice3":6,"LocationIDWin":2},{"GameSessionID":4478113,"DiceSum":10,"Dice1":4,"Dice2":3,"Dice3":3,"LocationIDWin":1},{"GameSessionID":4478112,"DiceSum":16,"Dice1":5,"Dice2":5,"Dice3":6,"LocationIDWin":2},{"GameSessionID":4478111,"DiceSum":11,"Dice1":3,"Dice2":2,"Dice3":6,"LocationIDWin":2},{"GameSessionID":4478110,"DiceSum":13,"Dice1":4,"Dice2":3,"Dice3":6,"LocationIDWin":2},{"GameSessionID":4478109,"DiceSum":9,"Dice1":2,"Dice2":3,"Dice3":4,"LocationIDWin":1},{"GameSessionID":4478108,"DiceSum":10,"Dice1":5,"Dice2":2,"Dice3":3,"LocationIDWin":1},{"GameSessionID":4478107,"DiceSum":13,"Dice1":5,"Dice2":3,"Dice3":5,"LocationIDWin":2},{"GameSessionID":4478106,"DiceSum":13,"Dice1":6,"Dice2":2,"Dice3":5,"LocationIDWin":2},{"GameSessionID":4478105,"DiceSum":7,"Dice1":1,"Dice2":2,"Dice3":4,"LocationIDWin":1}]]}]}));
            ws.send(JSON.stringify({"H":"minigametxhub","M":"GetAccountResult","A":[4478125],"I":2}));
            ws.send(JSON.stringify({"C":"d-87022C60-C,2E|Lc,7|Ld,0|Le,3|S,1AC","M":[{"H":"miniGameTXHub","M":"resultOfAccount","A":[[]]}]}));
            ws.send(JSON.stringify({"I":"2"}));*/
            ws.send(JSON.stringify({
                "C": "d-34DA4CAC-B,C37|fP,46|fQ,0|fR,3|F,7445",
                "M": [{
                    "H": "miniGameXocXocHub",
                    "M": "currentRoomsInfo",
                    "A": [[{
                        "BetType": 1,
                        "TotalAccount1": 37,
                        "TotalBetValue1": 12246450,
                        "TotalAccount2": 31,
                        "TotalBetValue2": 30578000,
                        "IsChanged": true
                    }]]
                }]
            }));
        }, 1000, ws);
        ws.send('Server received from client: ' + message);
        /*23:13:23.273
        {"C":"d-87022C60-C,2E|Lc,6|Ld,0|Le,3|S,1AC","M":[{"H":"miniGameTXHub","M":"gameHistory","A":[[{"GameSessionID":4478124,"DiceSum":7,"Dice1":2,"Dice2":1,"Dice3":4,"LocationIDWin":1},{"GameSessionID":4478123,"DiceSum":13,"Dice1":1,"Dice2":6,"Dice3":6,"LocationIDWin":2},{"GameSessionID":4478122,"DiceSum":10,"Dice1":4,"Dice2":5,"Dice3":1,"LocationIDWin":1},{"GameSessionID":4478121,"DiceSum":11,"Dice1":4,"Dice2":3,"Dice3":4,"LocationIDWin":2},{"GameSessionID":4478120,"DiceSum":15,"Dice1":5,"Dice2":6,"Dice3":4,"LocationIDWin":2},{"GameSessionID":4478119,"DiceSum":10,"Dice1":2,"Dice2":6,"Dice3":2,"LocationIDWin":1},{"GameSessionID":4478118,"DiceSum":9,"Dice1":1,"Dice2":3,"Dice3":5,"LocationIDWin":1},{"GameSessionID":4478117,"DiceSum":11,"Dice1":5,"Dice2":3,"Dice3":3,"LocationIDWin":2},{"GameSessionID":4478116,"DiceSum":9,"Dice1":3,"Dice2":2,"Dice3":4,"LocationIDWin":1},{"GameSessionID":4478115,"DiceSum":9,"Dice1":4,"Dice2":2,"Dice3":3,"LocationIDWin":1},{"GameSessionID":4478114,"DiceSum":13,"Dice1":6,"Dice2":1,"Dice3":6,"LocationIDWin":2},{"GameSessionID":4478113,"DiceSum":10,"Dice1":4,"Dice2":3,"Dice3":3,"LocationIDWin":1},{"GameSessionID":4478112,"DiceSum":16,"Dice1":5,"Dice2":5,"Dice3":6,"LocationIDWin":2},{"GameSessionID":4478111,"DiceSum":11,"Dice1":3,"Dice2":2,"Dice3":6,"LocationIDWin":2},{"GameSessionID":4478110,"DiceSum":13,"Dice1":4,"Dice2":3,"Dice3":6,"LocationIDWin":2},{"GameSessionID":4478109,"DiceSum":9,"Dice1":2,"Dice2":3,"Dice3":4,"LocationIDWin":1},{"GameSessionID":4478108,"DiceSum":10,"Dice1":5,"Dice2":2,"Dice3":3,"LocationIDWin":1},{"GameSessionID":4478107,"DiceSum":13,"Dice1":5,"Dice2":3,"Dice3":5,"LocationIDWin":2},{"GameSessionID":4478106,"DiceSum":13,"Dice1":6,"Dice2":2,"Dice3":5,"LocationIDWin":2},{"GameSessionID":4478105,"DiceSum":7,"Dice1":1,"Dice2":2,"Dice3":4,"LocationIDWin":1}]]}]}	1832
        23:13:23.279
        {"H":"minigametxhub","M":"GetAccountResult","A":[4478125],"I":2}	64
        23:13:24.268
        {"C":"d-87022C60-C,2E|Lc,7|Ld,0|Le,3|S,1AC","M":[{"H":"miniGameTXHub","M":"resultOfAccount","A":[[]]}]}	103
        23:13:24.500
        {"I":"2"}*/
        ws.send(JSON.stringify({
            "C": "d-34DA4CAC-B,C37|fP,46|fQ,0|fR,3|F,7445",
            "M": [{
                "H": "miniGameXocXocHub",
                "M": "currentRoomsInfo",
                "A": [[{
                    "BetType": 1,
                    "TotalAccount1": 37,
                    "TotalBetValue1": 12246450,
                    "TotalAccount2": 31,
                    "TotalBetValue2": 30578000,
                    "IsChanged": true
                }]]
            }]
        }));
    });
});