const {badRequest} = require('@hapi/boom');
const Joi = require('@hapi/joi');
const {wrapAsyncMiddleware} = require('../utils/wrap-async-middleware');
const validateAnswer = require('../utils/validate-answer');
const writeBase = require('../utils/firebase/write-base');
const {updateBase} = require('../utils/firebase/update-base');
const checkCelebration = require('../utils/firebase/check-celebration');

const requestSchema = Joi.object({
    id: Joi.string().required(),
    factId: Joi.string().required(),
    username: Joi.string().required()
}).options({stripUnknown: true});

module.exports.checkAnswerHandler = wrapAsyncMiddleware(async (req, res, next) => {
    const validationResult = requestSchema.validate(req.query);
    if (validationResult.error) {
        throw badRequest(validationResult.error.message);
    }
    let {username} = validationResult.value;
    const {id, factId} = validationResult.value;
    
    const result = await validateAnswer(id, username);
    let message = '';
    if (result) {
        const isCelebrated = await checkCelebration(id, factId);
        if (isCelebrated) {
            return res.json({
                result
            });
        }
        message = 'was celebrated';
        await updateBase(`facts/${id}/${factId}`, {isGuessed: true});
    } else {
        username = 'anonymous';
        message = 'didn`t guessed';
    }
    await writeBase('logs', {username, message});
    return res.json({
        result
    });
});
