const {internal} = require('@hapi/boom');
const {db} = require('../../db/setup');

const readBase = async (destination, limit) => {
    try {
        const data = limit ? await db.ref(destination).limitToLast(limit).once('value') : await db.ref(destination).once('value');
        return data ? data.val() : null;
    }
    catch (err) {
        console.error(err);
        throw internal();
    }
}

module.exports = readBase;
