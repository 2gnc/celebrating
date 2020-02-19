const {internal} = require('@hapi/boom');
const {updateBase} = require('./firebase/update-base');

module.exports.setNewFactsBunch = async (entriesArr) => {
    // если все отгадано - сбрасываем все и пакуем новый
    // проверяем, есть ли неотгаданное
    const bunch = [];
    entriesArr.forEach((entry) => {
        const [userId, facts] = entry;
        const [factEntry] = Object.entries(facts).filter((factEntry) => {
            const [,factBody] = factEntry;
            return !factBody.isGuessed && !factBody.isGuessing
        });
        if (factEntry) {
            bunch.push({userId, factId: factEntry[0]})
        }
    });
    try {
        if (bunch.length) {
            for (const item of bunch) {
                    await updateBase(`facts/${item.userId}/${item.factId}`, {isGuessing: true});
                };
                return true;
            } else {
                // TODO тут сбрасываем у всех фактов все в false, возвращаем true
                for (const entry of entriesArr) {
                    const [userId, facts] = entry;
                    for (const fact of Object.entries(facts)) {
                        const [factId, factBody] = fact;
                        await updateBase(`facts/${userId}/${factId}`, {isGuessing: false, isGuessed: false});
                    }
                }
                return true;
            }
    } catch (err) {
        console.log(err);
        return false;
    }
}
