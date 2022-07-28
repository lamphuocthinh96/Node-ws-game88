const WebSocketServer = require('ws').Server;
var txWs = new WebSocketServer({noServer: true});
txWs.on('connection', function (ws, req) {
    const pathname = req.url;
    if (pathname.startsWith("/tx/")) {
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
            if (json.M === 'GetAccountResult') {
                ws.send(JSON.stringify({
                    "C": "d-AF644E6C-B,AAA|DsD,24|DsE,0|DsF,3|O,6A52",
                    "M": [{"H": "miniGameTXHub", "M": "resultOfAccount", "A": [[]]}]
                }));
                ws.send(JSON.stringify({"I": "32"}));
            }
            let sec = 60, unitP = 10, unitM = 2100000;
            let t1 = 99, t2 = 106, b1 = 38645420, b2 = 59022000;
            setInterval(function () {
                if (sec === 0) {
                    ws.send(JSON.stringify({
                        "C": "d-AF644E6C-B,AAB|DsD,24|DsE,0|DsF,3|O,6A53",
                        "M": [{
                            "H": "miniGameTXHub",
                            "M": "currentSession",
                            "A": [{
                                "GameSessionID": 4480325,
                                "GameStatus": 1,
                                "RemainWaiting": 0,
                                "RemainBetting": 60,
                                "NextGameSessionID": 0
                            }]
                        }, {
                            "H": "miniGameTXHub",
                            "M": "currentRoomsInfo",
                            "A": [[{
                                "BetType": 1,
                                "TotalAccount1": 0,
                                "TotalBetValue1": 0,
                                "TotalAccount2": 0,
                                "TotalBetValue2": 0,
                                "IsChanged": true
                            }]]
                        }]
                    }));
                    ws.send(JSON.stringify({
                        "C": "d-AF644E6C-B,AAB|DsD,24|DsE,0|DsF,3|O,6A54", "M": [{
                            "H": "miniGameTXHub",
                            "M": "gameHistory",
                            "A": [[{
                                "GameSessionID": 4480324,
                                "DiceSum": 11,
                                "Dice1": 4,
                                "Dice2": 5,
                                "Dice3": 2,
                                "LocationIDWin": 2
                            }, {
                                "GameSessionID": 4480323,
                                "DiceSum": 8,
                                "Dice1": 2,
                                "Dice2": 3,
                                "Dice3": 3,
                                "LocationIDWin": 1
                            }, {
                                "GameSessionID": 4480322,
                                "DiceSum": 14,
                                "Dice1": 2,
                                "Dice2": 6,
                                "Dice3": 6,
                                "LocationIDWin": 2
                            }, {
                                "GameSessionID": 4480321,
                                "DiceSum": 9,
                                "Dice1": 3,
                                "Dice2": 1,
                                "Dice3": 5,
                                "LocationIDWin": 1
                            }, {
                                "GameSessionID": 4480320,
                                "DiceSum": 6,
                                "Dice1": 1,
                                "Dice2": 2,
                                "Dice3": 3,
                                "LocationIDWin": 1
                            }, {
                                "GameSessionID": 4480319,
                                "DiceSum": 7,
                                "Dice1": 2,
                                "Dice2": 2,
                                "Dice3": 3,
                                "LocationIDWin": 1
                            }, {
                                "GameSessionID": 4480318,
                                "DiceSum": 11,
                                "Dice1": 2,
                                "Dice2": 4,
                                "Dice3": 5,
                                "LocationIDWin": 2
                            }, {
                                "GameSessionID": 4480317,
                                "DiceSum": 10,
                                "Dice1": 3,
                                "Dice2": 3,
                                "Dice3": 4,
                                "LocationIDWin": 1
                            }, {
                                "GameSessionID": 4480316,
                                "DiceSum": 11,
                                "Dice1": 5,
                                "Dice2": 5,
                                "Dice3": 1,
                                "LocationIDWin": 2
                            }, {
                                "GameSessionID": 4480315,
                                "DiceSum": 16,
                                "Dice1": 6,
                                "Dice2": 6,
                                "Dice3": 4,
                                "LocationIDWin": 2
                            }, {
                                "GameSessionID": 4480314,
                                "DiceSum": 18,
                                "Dice1": 6,
                                "Dice2": 6,
                                "Dice3": 6,
                                "LocationIDWin": 2
                            }, {
                                "GameSessionID": 4480313,
                                "DiceSum": 11,
                                "Dice1": 6,
                                "Dice2": 2,
                                "Dice3": 3,
                                "LocationIDWin": 2
                            }, {
                                "GameSessionID": 4480312,
                                "DiceSum": 12,
                                "Dice1": 5,
                                "Dice2": 4,
                                "Dice3": 3,
                                "LocationIDWin": 2
                            }, {
                                "GameSessionID": 4480311,
                                "DiceSum": 7,
                                "Dice1": 2,
                                "Dice2": 3,
                                "Dice3": 2,
                                "LocationIDWin": 1
                            }, {
                                "GameSessionID": 4480310,
                                "DiceSum": 10,
                                "Dice1": 5,
                                "Dice2": 3,
                                "Dice3": 2,
                                "LocationIDWin": 1
                            }, {
                                "GameSessionID": 4480309,
                                "DiceSum": 8,
                                "Dice1": 5,
                                "Dice2": 1,
                                "Dice3": 2,
                                "LocationIDWin": 1
                            }, {
                                "GameSessionID": 4480308,
                                "DiceSum": 11,
                                "Dice1": 2,
                                "Dice2": 4,
                                "Dice3": 5,
                                "LocationIDWin": 2
                            }, {
                                "GameSessionID": 4480307,
                                "DiceSum": 11,
                                "Dice1": 3,
                                "Dice2": 4,
                                "Dice3": 4,
                                "LocationIDWin": 2
                            }, {
                                "GameSessionID": 4480306,
                                "DiceSum": 11,
                                "Dice1": 2,
                                "Dice2": 4,
                                "Dice3": 5,
                                "LocationIDWin": 2
                            }, {
                                "GameSessionID": 4480305,
                                "DiceSum": 8,
                                "Dice1": 3,
                                "Dice2": 1,
                                "Dice3": 4,
                                "LocationIDWin": 1
                            }]]
                        }]
                    }));
                    ws.send(JSON.stringify({
                        "C": "d-AF644E6C-B,AAB|DsD,24|DsE,0|DsF,3|O,6A55",
                        "M": [{
                            "H": "miniGameTXHub",
                            "M": "currentRoomsInfo",
                            "A": [[{
                                "BetType": 1,
                                "TotalAccount1": 0,
                                "TotalBetValue1": 0,
                                "TotalAccount2": 0,
                                "TotalBetValue2": 0,
                                "IsChanged": true
                            }]]
                        }]
                    }));
                    ws.send(JSON.stringify({}));
                    ws.send(JSON.stringify({
                        "C": "d-AD81F117-B,B37|EHu,7|EHv,0|EHw,4|F,6FEE",
                        "M": [{
                            "H": "miniGameTXHub",
                            "M": "currentResult",
                            "A": [{"Dice1": 2, "Dice2": 5, "Dice3": 1, "LocationIDWin": 1}]
                        }]
                    }));
                    sec = 60;
                }

                ws.send(JSON.stringify({
                    "C": "d-87022C60-C,76|Qf,2|Qg,0|Qh,3|S,47C",
                    "M": [{
                        "H": "miniGameTXHub",
                        "M": "currentRoomsInfo",
                        "A": [[{
                            "BetType": 1,
                            "TotalAccount1": t1 += unitP,
                            "TotalBetValue1": b1 += unitM,
                            "TotalAccount2": t2 += unitP,
                            "TotalBetValue2": b2 += unitM,
                            "IsChanged": true
                        }]]
                    }, {
                        "H": "miniGameTXHub",
                        "M": "currentSession",
                        "A": [{
                            "GameSessionID": 4478149,
                            "GameStatus": 1,
                            "RemainWaiting": 0,
                            "RemainBetting": sec -= 1,
                            "NextGameSessionID": 0
                        }]
                    }]
                }));
            }, 1000, ws, sec);
            // ws.send('Server received from client: ' + message);
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
    } /*else if (pathname.startsWith("/xocxoc/")) {
        ws.on('message', function (message) {
            let json = JSON.parse(message);
            if (json.M === 'getCurrentRooms') {
                ws.send(JSON.stringify({"C":"d-56B20727-B,85F|CPv,0|CDL,0|CPw,1","S":1,"M":[]}));
                ws.send(JSON.stringify({"C":"d-56B20727-B,85F|CPv,0|CDL,0|CPw,3|I,510D","G":"225sb9RkjQhvdIrjApHI0dXKTft2CJ93xg48R97yZLLf8rwhcFGqgg9XyCj9n5pbGhQSyocO3ew+yjZalaX6K0gFNlvTSiYT3+zMk+g7qHaK3aIKogIL8N82Zg4Dce3MVnuAMg==","M":[]}));
                ws.send(JSON.stringify({"C":"d-56B20727-B,85F|CPv,2|CDL,0|CPw,3|I,510D","M":[{"H":"miniGameXocXocHub","M":"currentRoomsInfo","A":[[{"BetType":1,"TotalAccount1":101,"TotalBetValue1":22529000,"TotalAccount2":89,"TotalBetValue2":30922000,"IsChanged":false}]]},{"H":"miniGameXocXocHub","M":"currentSession","A":[{"GameSessionID":3579570,"GameStatus":1,"RemainWaiting":0,"RemainBetting":21,"NextGameSessionID":0}]}]}));
                ws.send(JSON.stringify({"C":"d-56B20727-B,85F|CPv,3|CDL,0|CPw,3|I,510D","M":[{"H":"miniGameXocXocHub","M":"gameHistory","A":[[{"GameSessionID":3579569,"ChipSum":8,"Chip1":2,"Chip2":2,"Chip3":2,"Chip4":2,"LocationIDWin":2,"ChipNumber":4},{"GameSessionID":3579568,"ChipSum":7,"Chip1":2,"Chip2":2,"Chip3":1,"Chip4":2,"LocationIDWin":1,"ChipNumber":3},{"GameSessionID":3579567,"ChipSum":5,"Chip1":1,"Chip2":2,"Chip3":1,"Chip4":1,"LocationIDWin":1,"ChipNumber":3},{"GameSessionID":3579566,"ChipSum":6,"Chip1":1,"Chip2":2,"Chip3":2,"Chip4":1,"LocationIDWin":2,"ChipNumber":2},{"GameSessionID":3579565,"ChipSum":5,"Chip1":1,"Chip2":1,"Chip3":1,"Chip4":2,"LocationIDWin":1,"ChipNumber":3},{"GameSessionID":3579564,"ChipSum":7,"Chip1":2,"Chip2":1,"Chip3":2,"Chip4":2,"LocationIDWin":1,"ChipNumber":3},{"GameSessionID":3579563,"ChipSum":6,"Chip1":1,"Chip2":2,"Chip3":2,"Chip4":1,"LocationIDWin":2,"ChipNumber":2},{"GameSessionID":3579562,"ChipSum":7,"Chip1":2,"Chip2":1,"Chip3":2,"Chip4":2,"LocationIDWin":1,"ChipNumber":3},{"GameSessionID":3579561,"ChipSum":6,"Chip1":1,"Chip2":2,"Chip3":1,"Chip4":2,"LocationIDWin":2,"ChipNumber":2},{"GameSessionID":3579560,"ChipSum":7,"Chip1":2,"Chip2":1,"Chip3":2,"Chip4":2,"LocationIDWin":1,"ChipNumber":3},{"GameSessionID":3579559,"ChipSum":4,"Chip1":1,"Chip2":1,"Chip3":1,"Chip4":1,"LocationIDWin":2,"ChipNumber":4},{"GameSessionID":3579558,"ChipSum":8,"Chip1":2,"Chip2":2,"Chip3":2,"Chip4":2,"LocationIDWin":2,"ChipNumber":4},{"GameSessionID":3579557,"ChipSum":7,"Chip1":2,"Chip2":2,"Chip3":1,"Chip4":2,"LocationIDWin":1,"ChipNumber":3},{"GameSessionID":3579556,"ChipSum":4,"Chip1":1,"Chip2":1,"Chip3":1,"Chip4":1,"LocationIDWin":2,"ChipNumber":4},{"GameSessionID":3579555,"ChipSum":8,"Chip1":2,"Chip2":2,"Chip3":2,"Chip4":2,"LocationIDWin":2,"ChipNumber":4},{"GameSessionID":3579554,"ChipSum":6,"Chip1":2,"Chip2":1,"Chip3":1,"Chip4":2,"LocationIDWin":2,"ChipNumber":2},{"GameSessionID":3579553,"ChipSum":6,"Chip1":1,"Chip2":1,"Chip3":2,"Chip4":2,"LocationIDWin":2,"ChipNumber":2},{"GameSessionID":3579552,"ChipSum":6,"Chip1":1,"Chip2":2,"Chip3":2,"Chip4":1,"LocationIDWin":2,"ChipNumber":2},{"GameSessionID":3579551,"ChipSum":6,"Chip1":1,"Chip2":2,"Chip3":1,"Chip4":2,"LocationIDWin":2,"ChipNumber":2},{"GameSessionID":3579550,"ChipSum":5,"Chip1":1,"Chip2":1,"Chip3":2,"Chip4":1,"LocationIDWin":1,"ChipNumber":3}]]}]}));
                ws.send(JSON.stringify({"C":"d-56B20727-B,85F|CPv,4|CDL,0|CPw,3|I,510D","M":[{"H":"miniGameXocXocHub","M":"betOfAccount","A":[[],-1]}]}));
                ws.send(JSON.stringify({"C":"d-56B20727-B,85F|CPv,5|CDL,0|CPw,3|I,510D","M":[{"H":"miniGameXocXocHub","M":"resultOfDragon","A":[{"IsWin":false,"count":0}]}]}));
            }
            ws.send(JSON.stringify({"C":"d-56B20727-B,85F|CPv,5|CDL,0|CPw,3|I,510E","M":[{"H":"miniGameXocXocHub","M":"currentRoomsInfo","A":[[{"BetType":1,"TotalAccount1":106,"TotalBetValue1":22767000,"TotalAccount2":89,"TotalBetValue2":30922000,"IsChanged":true}]]}]}));
        });
    } else if(pathname.startsWith("/chat1/")){
        ws.send(JSON.stringify({"C":"d-56B20727-B,85F|CPv,0|CDL,0|CPw,1","S":1,"M":[]}));
    }*/
});