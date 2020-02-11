import React from 'react';
import './Layout.css';
import ToolsContainer from '../Tools/ToolsContainer';
import TerminalContainer from '../Terminal/TerminalContainer';
import HeaderContainer from '../Header/HeaderContainer';
import Preview from '../Preview/Preview';

export default class Layout extends React.Component {
    componentDidMount = () => {
        this.props.isMobile && this.props.onMobileDetected();
    }

    render() {
        return (
            <div className={`layout layout_mob_${this.props.isMobile}`}>
                <div className='layout__tools'>
                    <ToolsContainer />
                </div>
                <div className='layout__main'>
                    <div className='layout__box'>
                        <main className={`layout__code layout__code_preview_${this.props.isPreviewShown}`}>
                            <HeaderContainer />
                            main
                        </main>
                        <aside className={`layout__preview layout__preview_preview_${this.props.isPreviewShown}`}>
                            <Preview />
                        </aside>
                    </div>
                    <TerminalContainer />
                </div>
            </div>
        );
    }
}
