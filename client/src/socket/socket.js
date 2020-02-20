import {initiatedStore} from '../index';
import {host} from '../helpers/getHost';
import {startedAnswerCheck} from '../actions/celebration-actions';
export const ws = new WebSocket(host);

ws.onmessage = ({data}) => {
    const action = JSON.parse(data);
    switch(action.type) {
        case 'STARTED_ANSWER_CHECK':
            console.log(action)
            return initiatedStore.dispatch(startedAnswerCheck(action.userId));
        default:
            return;
    }
}
