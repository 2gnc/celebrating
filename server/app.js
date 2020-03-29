const path = require('path');
const express = require('express');
// const wakeUp = require('./utils/wake-up');
const {v1Router} = require('./v1');
require('./db/setup');

const WebSocket = require('ws');
const http = require('http');
const {prepareLog} = require('./utils/prepare-log');
const app = express();
const server = http.createServer(app);

const wss = new WebSocket.Server({server});
wss.on('connection', function (ws) {
    ws.on('message', async function (message) {
        for (const client of wss.clients) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
                if (JSON.parse(message).type !== 'STARTED_ANSWER_CHECK') {
                    const log = await prepareLog();
                    const logMessage = {};
                    logMessage.type = 'UPDATE_LOG';
                    logMessage.message = log[0][1].message;
                    client.send(JSON.stringify(logMessage));
                }
            }
        }
    });
});

const port = process.env.PORT || 5555;
const isProd = process.env.NODE_ENV === 'production';
const URL = 'https://celebration-2020.herokuapp.com/';

const publicPath = isProd ? path.join(__dirname, '..', 'public') : path.join(__dirname, '..', 'client', 'public');

app
.use(express.static(publicPath))
.use('/v1', v1Router)
.get('/', (_req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

server.listen(port, listenCallback);

function listenCallback(err) {
    if (err) {
        console.error('Application start error ', err);
    }
    console.log(`Application started on port ${port}`);
    // wakeUp(URL);
};
