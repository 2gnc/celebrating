const {internal} = require('@hapi/boom');
const {db} = require('../../db/setup');

const readBase = async (destination) => {
    try {
        const data = await db.ref(destination).once('value');
        return data ? data.val() : null;
    }
    catch (err) {
        console.error(err);
        throw internal();
    }
}

module.exports = readBase;
