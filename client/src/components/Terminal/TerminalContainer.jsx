import {connect} from 'react-redux';
import Terminal from './Terminal';

const mapStateToProps = (state) => ({
    log: state.log,
    isTerminalShown: state.ui.isTerminalShown,
});

export default connect(mapStateToProps)(Terminal);
