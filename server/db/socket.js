const WebSocket = require('ws');
const {prepareLog} = require('../utils/prepare-log');

const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', function (ws) {
    ws.on('message', async function (message) {
        for (const client of wss.clients) {
            if (client.readyState === WebSocket.OPEN) {
                const log = await prepareLog();
                const logMessage = {};
                logMessage.type = 'UPDATE_LOG';
                logMessage.message = log[0][1].message;
                client.send(message);
                client.send(JSON.stringify(logMessage));
            }
        }
    });
});
