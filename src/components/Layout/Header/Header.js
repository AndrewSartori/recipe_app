import React from 'react'
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
    return (
        <header className="App-header d-flex flex-row justify-content-between">
            <Link to={{ pathname: `/` }}>
                <button className="p-2 header__button">
                    Search Recipes
                </button>
            </Link>
            <h3>Welcome to <i>Recipeez</i>!</h3>
            <Link to={{ pathname: `/recipebox` }}>
                <button className="p-2 header__button">
                    Create Custom Recipes
                </button>
            </Link>
        </header>
    )
}

export default Header
