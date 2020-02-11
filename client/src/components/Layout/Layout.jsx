import React from 'react';
import './Layout.css';
import ToolsContainer from '../Tools/ToolsContainer';
import TerminalContainer from '../Terminal/TerminalContainer';
import HeaderContainer from '../Header/HeaderContainer';
import Preview from '../Preview/Preview';

function Layout() {
    return (
        <div className='layout'>
            <div className='layout__tools'>
                <ToolsContainer />
            </div>
            <div className='layout__main'>
                <div className='layout__box'>
                    <main className='layout__code'>
                        <HeaderContainer />
                        main
                    </main>
                    <aside className='layout__preview'>
                        <Preview />
                    </aside>
                </div>
                <TerminalContainer />
            </div>
        </div>
    );
}

export default Layout;
