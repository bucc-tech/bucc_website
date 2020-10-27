import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Layout = ({children}) => {
    return (
        <>
            <Nav/>
                {children}
            <Footer/>    
        </>
    )
}

export default Layout
