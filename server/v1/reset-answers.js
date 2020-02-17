const {wrapAsyncMiddleware} = require('../utils/wrap-async-middleware');
const {internal} = require('@hapi/boom');
const readBase = require('../utils/firebase/read-base');
const updateBase = require('../utils/firebase/update-base');

module.exports.resetAnswers = wrapAsyncMiddleware(async (_req, res, next) => {
    try {
        // проверяем, все ли отгадано
        const facts = await readBase('facts');
        const factsArr = Object.entries(facts);
        const hasUnguessed = factsArr.some((entry) => {
            const [,facts] = entry;
            return Object.values(facts).some((fact) => {
                return !fact.isGuessed
            })
        });
        const status = hasUnguessed ? 405 : 200;
        if (!hasUnguessed) {
            for (const fact of factsArr) {
                const [userId, userFacts] = fact;
                for (const userFact of Object.entries(userFacts)) {
                    const [factId] = userFact;
                    await updateBase(`facts/${userId}/${factId}`, {isGuessed: false, isGuessing: false});
                }
            }
        }
        res.sendStatus(status);
    } catch (e) {
        console.error(e);
        throw internal();
    }
});
