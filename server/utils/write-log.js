const {internal} = require('@hapi/boom');
const {db} = require('../db/setup');

const writeLog = ({username, message}) => {
    return db.ref('logs').push({
        user: username || 'anonymous',
        message
    })
        .then(() => console.log('Log updated'))
        .catch((err) => {
            console.error(err);
            throw internal();
        })
}

module.exports = writeLog;
