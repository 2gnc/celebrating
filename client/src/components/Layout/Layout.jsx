import React from 'react';
import './Layout.css';
import Tools from '../Tools/Tools';
import Terminal from '../Terminal/Terminal';
import Header from '../Header/Header';

function Layout() {
    return (
        <div className='layout'>
            <div className='layout__tools'>
                <Tools />
            </div>
            <div className='layout__main'>
                <Header file='celebration.js' />
                <div className='layout__box'>
                    <main className='layout__code'>
                        main
                    </main>
                    <aside className='layout__preview'>
                        aside
                    </aside>
                </div>
                <Terminal />
            </div>
        </div>
    );
}

export default Layout;
