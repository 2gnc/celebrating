const colleagues = {
    '01': 'vsesh',
    '02': 'strelga',
    '03': 'maderwin',
    '04': 'doni-rio',
    '05': 'doroginin',
    '06': 'liberateai',
    '07': 'dodev',
    '08': 'a-aleshkov',
    '09': 'p-nemykin',
    '10': 'devfirsov',
    '11': 'sasha-frolov'
}

function validateAnswer(id, answer) {
    return answer === colleagues[id];
}

export default validateAnswer;
