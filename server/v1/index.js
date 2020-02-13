const {Router} = require('express'); 
const {checkAnswerHandler} = require('./check-answer');

module.exports.v1Router = Router()
    .get('/check_answer', checkAnswerHandler);
