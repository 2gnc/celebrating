import {connect} from 'react-redux';
import Celebration from './Celebration';
import {startInitialCelebrationDataFetching} from '../../actions/celebration-actions';

const mapStateToProps = (state) => ({
    users: state.celebration.users,
    order: state.celebration.usersOrder,
});

const mapDispatchToProps = (dispatch) => ({
    startDataFetching: () => dispatch(startInitialCelebrationDataFetching())
});

export default connect(mapStateToProps, mapDispatchToProps)(Celebration);
