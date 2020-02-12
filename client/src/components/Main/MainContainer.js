import {connect} from 'react-redux';
import Main from './Main';

const mapStateToProps = (state) => ({
    tab: state.tabs.activeTab
});

export default connect(mapStateToProps)(Main);
