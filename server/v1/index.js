const {Router} = require('express'); 
const {checkAnswerHandler} = require('./check-answer');
const {loadInitialData} = require('./load-initial-data');
const {resetAnswers} = require('./reset-answers');

module.exports.v1Router = Router()
    .get('/check_answer', checkAnswerHandler)
    .get('/initialize', loadInitialData)
    .post('/reset', resetAnswers);
