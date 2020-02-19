import {connect} from 'react-redux';
import Celebration from './Celebration';
import {
    startInitialCelebrationDataFetching,
    startAnswerCheck,
    updateUsernameInput
} from '../../actions/celebration-actions';

const mapStateToProps = (state) => ({
    users: state.celebration.users,
    order: state.celebration.usersOrder,
    isDataFetching: state.celebration.isDataFetching,
});

const mapDispatchToProps = (dispatch) => ({
    startDataFetching: () => dispatch(startInitialCelebrationDataFetching()),
    onAnswer: (userId, factId, username) => dispatch(startAnswerCheck(userId, factId, username)),
    onInputChange: (userId, value) => dispatch(updateUsernameInput(userId, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Celebration);
