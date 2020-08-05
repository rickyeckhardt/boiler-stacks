import React from 'react'

import Navbar from './navbar'

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </>
    );
}

export default Layout;