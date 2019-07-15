import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className="App-header d-flex flex-row justify-content-between">
            <Link to={{ pathname: `/` }}>
                <button className="p-2">
                    Search Recipes
                </button>
            </Link>
            <Link to={{ pathname: `/recipebox` }}>
                <button className="p-2">
                    Create Custom Recipes
                </button>
            </Link>
        </header>
    )
}

export default Header
