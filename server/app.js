const path = require('path');
const express = require('express');
const wakeUp = require('./utils/wake-up.js');

const port = process.env.PORT || 5000;
const isProd = process.env.NODE_ENV === 'production';
const URL = 'https://celebration-2020.herokuapp.com/';

const publicPath = isProd ? path.join(__dirname, '..', 'public') : path.join(__dirname, '..', 'client', 'public');

const app = express()
    .use(express.static(publicPath))
    .get('/api/validate', (_req, res) => {res.json({test: 'api'})})
    .get('*', (_req, res) => {
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
