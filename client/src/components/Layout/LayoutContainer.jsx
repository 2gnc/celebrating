import {connect} from 'react-redux';
import Layout from './Layout';

const mapStateToProps = (state) => ({
    isPreviewShown: state.ui.isPreviewShown
});

export default connect(mapStateToProps)(Layout);
