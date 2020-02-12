import {connect} from 'react-redux';
import Preview from './Preview';

const mapStateToProps = (state) => ({
    users: state.celebration.users
});

export default connect(mapStateToProps)(Preview);
