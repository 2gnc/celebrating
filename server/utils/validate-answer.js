const readBase = require('./firebase/read-base');

const validateAnswer = async (id, answer) => {
    const check = await readBase(`usernames/${id}`);
    return answer === check;
}

module.exports = validateAnswer;
