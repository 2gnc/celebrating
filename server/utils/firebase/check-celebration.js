const {internal} = require('@hapi/boom');
const {db} = require('../../db/setup');

const checkCelebration = async (userId, factId) => {
    return db.ref(`facts/${userId}`)
        .once('value')
        .then((snapshot) => snapshot.val().isGuessed === true)
        .catch((err) => {
            console.error(err);
            throw internal();
        })
};

module.exports = checkCelebration;
