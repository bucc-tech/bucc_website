import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Layout = ({ children }) => {
    return (
        <div className="w-full h-full overflow-x-hidden">
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
