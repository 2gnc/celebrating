const {wrapAsyncMiddleware} = require('../utils/wrap-async-middleware');
const {internal, notFound} = require('@hapi/boom');
const readBase = require('../utils/firebase/read-base');
const updateBase = require('../utils/firebase/update-base');

module.exports.loadInitialData = wrapAsyncMiddleware(async (req, res, next) => {
    try {
        // получаем неугаданные факты
        const facts = await readBase('facts');
        if (!facts) {
            throw notFound();
        }
        // const unguessedFacts = Object.entries(facts).map((entry) => {
        //     const userFacts = Object.entries(entry).filter((fact) => !fact.isGuesed);
        //     if (!userFacts.length) {
        //         return;
        //     }
        //     const guessingFact = userFacts.filter((fact) => fact.isGuessing);
        //     if (guessingFact.length) {
        //         return guessingFact[0];
        //     };
        //     return [unguessedFact] = userFacts;
        // });
        const pickedFacts =[];
        Object.entries(facts).forEach((userFacts) => {
            const [userId,facts] = userFacts;
            const unguessedFacts = Object.entries(facts).filter((facts) => {
                const [,fact] = facts;
                return !fact.isGuessed;
            });
            const guessingFact = unguessedFacts.filter((fact) => {
                const [,single] = fact;
                return single.isGuessing;
            });
            if (guessingFact.length) {
                const data = mapFact(guessingFact[0]);
                return pickedFacts.push(data);
            }
            if (unguessedFacts.length) {
                // берем первый неугаданный
                // добавляем в массив
                const data = mapFact(unguessedFacts[0]);
                pickedFacts.push(data);
                // меняем ему статус в БД
                console.log(`facts/${userId}/${unguessedFacts[0][0]}`);
                // updateBase(`facts/${userId}/${unguessedFacts[0][0]}`, {isGuessing: true}); //destination, data
            }

        });
        console.log(pickedFacts);
    } catch (e) {
        console.error(e);
        throw internal();
    }
});

function mapFact(fact) { // TODO тут поправить баг
    const data = {};
    const [factId, factData] = fact;
    data[userId] = {};
    data[userId][factId] = factData;
    return data;
}
// {
    // facts: {} - из числа неугаданных
        // '01' :{
        //     factId: '01-1',
        //     factText: 'Lorem ipsum dolor sit amet.'
        // },
    // guessedUsers: [{id: '01', username: 'tgnc'}]
// }
