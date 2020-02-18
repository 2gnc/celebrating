const {internal} = require('@hapi/boom');
const {updateBase} = require('./firebase/update-base');
const readBase = require('./firebase/read-base');

const prepareFacts = async (facts) => {
    try {
        const pickedFacts ={};
        const guessedUsers = [];
        const parcedFacts = Object.entries(facts);
        for (const userFacts of parcedFacts) {
            const [userId,facts] = userFacts;
            const unguessedFacts = Object.entries(facts).filter((facts) => {
                const [,fact] = facts;
                return !fact.isGuessed || (fact.isGuessed && fact.isGuessing);
            });
            const guessingFact = unguessedFacts.filter((fact) => {
                const [,single] = fact;
                return single.isGuessing;
            });
            if (guessingFact.length) {
                const [factId,fact] = guessingFact[0];
                if (fact.isGuessed) {
                    const username = await readBase(`usernames/${userId}`);
                    guessedUsers.push({
                        id: userId,
                        username
                    });
                }
                pickedFacts[userId] = fact;
                pickedFacts[userId].factId = factId;
                continue;
            }
            if (unguessedFacts.length) {
                // берем первый неугаданный
                // добавляем в объект
                pickedFacts[userId] = unguessedFacts[0];
                // меняем ему статус в БД
                await updateBase(`facts/${userId}/${unguessedFacts[0][0]}`, {isGuessing: true});
            }
        };
        return {pickedFacts, guessedUsers};
    } catch (e) {
        console.log(e);
        throw internal();
    }
}

module.exports = prepareFacts;
