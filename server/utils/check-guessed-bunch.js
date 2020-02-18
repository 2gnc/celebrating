module.exports.checkGuessedBunch = (entriesArr) => {
    const bunch = [];
    entriesArr.forEach((entry) => {
        const [userId, facts] = entry;
        const [factEntry] = Object.entries(facts).filter((factEntry) => {
            const [,factBody] = factEntry;
            return factBody.isGuessed && factBody.isGuessing;
        });
        if (factEntry) {
            bunch.push({userId, factId: factEntry[0]})
        }
    })
    return bunch;
}

// [ { userId: '10', factId: '10-1' }, ...] || []
