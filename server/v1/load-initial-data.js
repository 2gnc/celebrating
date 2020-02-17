const {wrapAsyncMiddleware} = require('../utils/wrap-async-middleware');
const {internal, notFound} = require('@hapi/boom');
const readBase = require('../utils/firebase/read-base');
const prepareFacts = require('../utils/prepare-facts');


module.exports.loadInitialData = wrapAsyncMiddleware(async (_req, res) => {
    try {
        // получаем неугаданные факты
        const facts = await readBase('facts');
        if (!facts) {
            throw notFound();
        }
        const preparedFacts = await prepareFacts(facts);
        res.json({
            facts: preparedFacts.pickedFacts,
            guessedUsers: preparedFacts.guessedUsers
        });
    } catch (e) {
        console.error(e);
        throw internal();
    }
});
