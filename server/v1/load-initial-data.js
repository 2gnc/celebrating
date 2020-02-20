const {wrapAsyncMiddleware} = require('../utils/wrap-async-middleware');
const {internal, notFound} = require('@hapi/boom');
const readBase = require('../utils/firebase/read-base');
const prepareFacts = require('../utils/prepare-facts');
const wss = require('../app');

module.exports.loadInitialData = wrapAsyncMiddleware(async (_req, res) => {
    try {
        // wss.send('12345')
        // wss.once((ws) => {
        //     ws.send('got initial loading');
        // })
        // получаем неугаданные факты
        const facts = await readBase('facts');
        if (!facts) {
            throw notFound();
        }
        const preparedFacts = await prepareFacts(facts);
        return res.json({
            facts: preparedFacts.pickedFacts,
            guessedUsers: preparedFacts.guessedUsers
        });
    } catch (e) {
        console.error(e);
        throw internal();
    }
});
