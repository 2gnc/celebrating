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
            return initiatedStore.dispatch(startedAnswerCheck(action.userId));
        case 'SET_ANSWER_FALSE':
            return initiatedStore.dispatch(setAnswerFalse(action.userId, action.factId));
        case 'SET_ANSWER_TRUE':
            return initiatedStore.dispatch(setAnswerTrue(action.userId, action.username));
        case 'UPDATE_LOG':
            return initiatedStore.dispatch(updateLog(action.message))
        default:
            return;
    }
}
