const {badRequest} = require('@hapi/boom');
const Joi = require('@hapi/joi');
const {validateAnswer} = require('../utils/validate-answer');

const requestSchema = Joi.object({
    id: Joi.string().required(),
    username: Joi.string().required()
}).options({stripUnknown: true});

module.exports.checkAnswerHandler = (req, res, next) => {
    const validationResult = requestSchema.validate(req.query);
    if (validationResult.error) {
        next(badRequest(validationResult.error.message));
        return;
    }
    const {id, username} = validationResult.value;
    const result = validateAnswer(id, username);
    res.json({
        result
    });
};
