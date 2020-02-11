import {connect} from 'react-redux';
import Tools from './Tools';
import {selectTab} from '../../actions/tabs-actions';

const mapStateToProps = (state) => ({
    isInfoActive: state.tabs.activeTab === 'README.md',
    isCodeActive: state.tabs.activeTab === 'celebration.js'
});

const mapDispatchToProps = (dispatch) => ({
    onInfoClick: (tab) => dispatch(selectTab(tab))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tools);
