const {internal} = require('@hapi/boom');
const {db} = require('../../db/setup');

const writeBase = async (destination, data) => {
    try {
        await db.ref(destination).push(data);
        return console.log(`${destination} updated`);
    }
    catch (err) {
        console.error(err);
        throw internal();
    }
}

module.exports = writeBase;
