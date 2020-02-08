const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../..', 'public');
const port = process.env.PORT || 5000;

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
    console.info(`Application started on port ${port}`);
}
