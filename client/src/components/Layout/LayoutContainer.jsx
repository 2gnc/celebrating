import {connect} from 'react-redux';
import Bowser from 'bowser';
import Layout from './Layout';
import {hidePreview} from '../../actions/ui-actions';

const {platform} = Bowser.parse(window.navigator.userAgent);

const mapStateToProps = (state) => ({
    isPreviewShown: state.ui.isPreviewShown,
    isMobile: platform && platform.type === 'mobile'
});

const mapDispatchToProps = (dispatch) => ({
    onMobileDetected: () => dispatch(hidePreview())
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
