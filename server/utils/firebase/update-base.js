const {internal} = require('@hapi/boom');
const {db} = require('../../db/setup');

const updateBase = async (destination, data) => {
    return db.ref(destination).update(data)
        .then(() => console.log(`${destination} updated`))
        .catch((err) => {
            console.error(err);
            throw internal();
        })
}

module.exports = updateBase;
