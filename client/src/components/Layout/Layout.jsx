import React from 'react';
import './Layout.css';
import Tools from '../Tools/Tools';
import Terminal from '../Terminal/Terminal';

function Layout() {
    return (
        <div className='layout'>
            <div className='layout__tools'>
                <Tools />
            </div>
            <div className='layout__main'>
                <div className='layout__header'>
                    header
                </div>
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
