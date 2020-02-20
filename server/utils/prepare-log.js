const {internal} = require('@hapi/boom');
const readBase = require('./firebase/read-base');

module.exports.prepareLog = async () => {
    try {
        const log = await readBase('logs', 1);
        return Object.entries(log);
    } catch (e) {
        console.log(e);
        throw internal();
    }
}
