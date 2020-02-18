const {internal} = require('@hapi/boom');
const {updateBase} = require('./firebase/update-base');

module.exports.setNewFactsBunch = async (entriesArr) => {
    // если все отгадано - сбрасываем все и пакуем новый
    // проверяем, есть ли неотгаданное
    const bunch = [];
    entriesArr.forEach((entry) => {
        const [userId, facts] = entry;
        // console.log(facts)
        const [factEntry] = Object.entries(facts).filter((factEntry) => {
            const [,factBody] = factEntry;
            return !factBody.isGuessed && !factBody.isGuessing
        });
        // console.log(factEntry);
        if (factEntry) {
            bunch.push({userId, factId: factEntry[0]})
        }
    });
    try {
        if (bunch.length) {
            for (const item of bunch) {
                    await updateBase(`facts/${item.userId}/${item.factId}`, {isGuessing: true});
                };
                return bunch;
            } else {
                // TODO тут сбрасываем у всех фактов все в false, делаем и возвращаем новый банч
            }
    } catch (e) {
        throw internal(e)
    }
}
