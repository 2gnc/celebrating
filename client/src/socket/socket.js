import {initiatedStore} from '../index';
import {host} from '../helpers/getHost';
import {startedAnswerCheck, setAnswerFalse, setAnswerTrue} from '../actions/celebration-actions';
import {updateLog} from '../actions/log-actions';

const ws = new WebSocket(host);

export const broadcastAction = (actionCreator) => {
    ws.send(JSON.stringify(actionCreator));
};

ws.onmessage = ({data}) => {
    const action = JSON.parse(data);
    switch(action.type) {
        case 'STARTED_ANSWER_CHECK':
            console.log(action);
            return initiatedStore.dispatch(startedAnswerCheck(action.userId));
        case 'SET_ANSWER_FALSE':
            console.log(action);
            return initiatedStore.dispatch(setAnswerFalse(action.userId, action.factId));
        case 'SET_ANSWER_TRUE':
            console.log(action);
            return initiatedStore.dispatch(setAnswerTrue(action.userId, action.username));
        case 'UPDATE_LOG':
            console.log(action.message);
            return initiatedStore.dispatch(updateLog(action.message))
        default:
            return;
    }
}
