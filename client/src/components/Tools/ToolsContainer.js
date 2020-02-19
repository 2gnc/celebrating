import {connect} from 'react-redux';
import Bowser from 'bowser';
import Tools from './Tools';
import {selectTab} from '../../actions/tabs-actions';
import {restartCelebration} from '../../actions/celebration-actions';
import {showTerminal, hideTerminal, showPreview, hidePreview} from '../../actions/ui-actions';
import getQuessedUsers from '../../helpers/getGuessedUsers';

const {platform} = Bowser.parse(window.navigator.userAgent);

const mapStateToProps = (state) => ({
    isInfoActive: state.tabs.activeTab === 'README.md',
    isCodeActive: state.tabs.activeTab === 'celebration.js',
    isTerminalShown: state.ui.isTerminalShown,
    isPreviewShown: state.ui.isPreviewShown,
    isMobile: platform && platform.type === 'mobile',
    actionsCount: state.celebration.actionsCount,
    showReset: !state.celebration.isDataFetching && getQuessedUsers(state.celebration.users).length === 11
});

const mapDispatchToProps = (dispatch) => ({
    onFilesClick: (tab) => dispatch(selectTab(tab)),
    onTerminalClick: (isTerminalShown) => isTerminalShown ? dispatch(hideTerminal()) : dispatch(showTerminal()),
    onPreviewClick: (isPreviewShown) => isPreviewShown ? dispatch(hidePreview()) : dispatch(showPreview()),
    onRestartClick: () => dispatch(restartCelebration())
});

export default connect(mapStateToProps, mapDispatchToProps)(Tools);
