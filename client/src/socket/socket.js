import {initiatedStore} from '../index';
import {startedAnswerCheck} from '../actions/celebration-actions';
export const ws = new WebSocket("ws://localhost:8080");

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
