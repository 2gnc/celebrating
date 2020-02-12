import {connect} from 'react-redux';
import Celebration from './Celebration';

const mapStateToProps = (state) => ({
    users: state.celebration.users,
    order: state.celebration.usersOrderToShow
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Celebration);
