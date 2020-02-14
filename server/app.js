const path = require('path');
const express = require('express');
const wakeUp = require('./utils/wake-up');
const {v1Router} = require('./v1');
require('./db/setup');

const port = process.env.PORT || 5555;
const isProd = process.env.NODE_ENV === 'production';
const URL = 'https://celebration-2020.herokuapp.com/';

const publicPath = isProd ? path.join(__dirname, '..', 'public') : path.join(__dirname, '..', 'client', 'public');

const app = express()
    .use(express.static(publicPath))
    .use('/v1', v1Router)
    .get('/', (_req, res) => {
        res.sendFile(path.join(publicPath, 'index.html'));
    });

app.listen(port, listenCallback);

function listenCallback(err) {
    if (err) {
        console.error('Application start error ', err);
    }
    console.log(`Application started on port ${port}`);
    wakeUp(URL);
};
