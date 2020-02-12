import {connect} from 'react-redux';
import Header from './Header';
import {selectTab} from '../../actions/tabs-actions';

const mapStateToProps = (state) => ({
    file: state.tabs.activeTab
});

const mapDispatchToProps = (dispatch) => ({
    onTabClick: (tab) => dispatch(selectTab(tab))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
