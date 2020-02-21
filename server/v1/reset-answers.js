const {wrapAsyncMiddleware} = require('../utils/wrap-async-middleware');
const {internal} = require('@hapi/boom');
const readBase = require('../utils/firebase/read-base');
const {updateBase} = require('../utils/firebase/update-base');
const {setNewFactsBunch} = require('../utils/set-new-facts-bunch');
const {checkGuessedBunch} = require('../utils/check-guessed-bunch');

module.exports.resetAnswers = wrapAsyncMiddleware(async (_req, res, next) => {
    try {
        // проверяем, все ли отгадано
        const facts = await readBase('facts');
        const factsArr = Object.entries(facts);
        // проверяем, сколько сейчас отгаданных пользователей из числа отгадываемых
        const bunch = checkGuessedBunch(factsArr);

        if (bunch.length !== 12) {
            res.json({
                updated: false
            })
            // если их 11 - сбрасываем им isGuessing
        } else {
            for (const fact of bunch) {
                await updateBase(`facts/${fact.userId}/${fact.factId}`, {isGuessing: false});
            }
        }
        // готовим новый банч
        const result = await setNewFactsBunch(factsArr);
        return res.json({
            status: result === true ? 'updated' : 'not-updated'
        });
    } catch (e) {
        console.error(e);
        throw internal();
    }
});
