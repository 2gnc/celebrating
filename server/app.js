const path = require('path');
const express = require('express');
const port = process.env.PORT || 5000;
const isProd = process.env.NODE_ENV === 'production';

const publicPath = isProd ? path.join(__dirname, '..', 'public') : path.join(__dirname, '..', 'client', 'public');

const app = express()
    .use(express.static(publicPath))
    .get('/api/*', (req, res) => {res.json({test: 'api'})})
    .get('*', (req, res) => {
        res.sendFile(path.join(publicPath, 'index.html'));
    });

app.listen(port, listenCallback);

function listenCallback(err) {
    if (err) {
        console.error('Application start error ', err);
    }
    console.log(`Application started on port ${port}`);
}


// TODO: дописать старт приложения с NODE_ENV === 'production'
