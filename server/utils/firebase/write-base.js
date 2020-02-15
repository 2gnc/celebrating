const {internal} = require('@hapi/boom');
const {db} = require('../../db/setup');

const writeBase = (destination, data) => {
    return db.ref(destination).push(data)
        .then(() => console.log(`${destination} updated`))
        .catch((err) => {
            console.error(err);
            throw internal();
        })
}

module.exports = writeBase;
