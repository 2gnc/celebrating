import {connect} from 'react-redux';
import Celebration from './Celebration';

const mapStateToProps = (state) => ({
    facts: state.ui.factsToShow
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Celebration);
