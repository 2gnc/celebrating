import React from 'react';
import './Layout.css';
import Tools from '../Tools/Tools';
import TerminalContainer from '../Terminal/TerminalContainer';
import Header from '../Header/Header';
import Preview from '../Preview/Preview';

function Layout() {
    return (
        <div className='layout'>
            <div className='layout__tools'>
                <Tools />
            </div>
            <div className='layout__main'>
                <div className='layout__box'>
                    <main className='layout__code'>
                        <Header file='README.md' />
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
