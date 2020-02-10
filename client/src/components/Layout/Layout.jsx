import React from 'react';
import './Layout.css';
import Tools from '../Tools/Tools';

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
                    <main className='layout__main'>
                        main
                    </main>
                    <aside className='layout__preview'>
                        aside
                    </aside>
                </div>
                <footer className='layout__footer'>
                    footer
                </footer>
            </div>
        </div>
    );
}

export default Layout;
