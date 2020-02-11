import {connect} from 'react-redux';
import Terminal from './Terminal';

const mapStateToProps = (state) => ({
    log: state.log
});

export default connect(mapStateToProps)(Terminal);
