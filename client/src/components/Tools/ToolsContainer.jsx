import {connect} from 'react-redux';
import Tools from './Tools';
import {selectTab} from '../../actions/tabs-actions';
import {showTerminal, hideTerminal, showPreview, hidePreview} from '../../actions/ui-actions';

const mapStateToProps = (state) => ({
    isInfoActive: state.tabs.activeTab === 'README.md',
    isCodeActive: state.tabs.activeTab === 'celebration.js',
    isTerminalShown: state.ui.isTerminalShown,
    isPreviewShown: state.ui.isPreviewShown
});

const mapDispatchToProps = (dispatch) => ({
    onFilesClick: (tab) => dispatch(selectTab(tab)),
    onTerminalClick: (isTerminalShown) => isTerminalShown ? dispatch(hideTerminal()) : dispatch(showTerminal()),
    onPreviewClick: (isPreviewShown) => isPreviewShown ? dispatch(hidePreview()) : dispatch(showPreview()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Tools);
