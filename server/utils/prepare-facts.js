const updateBase = require('./firebase/update-base');

const prepareFacts = async (facts) => {
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
                const data = mapFact(userId, guessingFact[0]);
                return pickedFacts.push(data);
            }
            if (unguessedFacts.length) {
                // берем первый неугаданный
                // добавляем в массив
                const data = mapFact(userId, unguessedFacts[0]);
                pickedFacts.push(data);
                // меняем ему статус в БД
                updateBase(`facts/${userId}/${unguessedFacts[0][0]}`, {isGuessing: true});
            }   
        });
    return pickedFacts;
}

function mapFact(userid, fact) { // TODO тут поправить баг
    const data = {};
    const [factId, factData] = fact;
    data[userid] = {};
    data[userid][factId] = factData;
    return data;
}

module.exports = prepareFacts;
