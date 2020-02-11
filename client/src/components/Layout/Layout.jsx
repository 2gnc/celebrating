import React from 'react';
import './Layout.css';
import ToolsContainer from '../Tools/ToolsContainer';
import TerminalContainer from '../Terminal/TerminalContainer';
import HeaderContainer from '../Header/HeaderContainer';
import Preview from '../Preview/Preview';

function Layout({isPreviewShown}) {
    return (
        <div className='layout'>
            <div className='layout__tools'>
                <ToolsContainer />
            </div>
            <div className='layout__main'>
                <div className='layout__box'>
                    <main className={`layout__code layout__code_preview_${isPreviewShown}`}>
                        <HeaderContainer />
                        main
                    </main>
                    <aside className={`layout__preview layout__preview_preview_${isPreviewShown}`}>
                        <Preview />
                    </aside>
                </div>
                <TerminalContainer />
            </div>
        </div>
    );
}

export default Layout;
