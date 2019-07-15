import React from 'react'

// Imports
import Display from "../../containers/Display/Display";
import Header from "./Header/Header";

const Layout = (props) => {
    return (
        <div>
            <Header />
            <Display />
        </div>
    )
}

export default Layout;