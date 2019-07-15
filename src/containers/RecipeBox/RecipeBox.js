import React from "react";

// Imports
import Header from "../Header/Header";
import RecipeForm from "./RecipeForm/RecipeForm";

const RecipeBox = (props) => {
    return(
        <div>
            <Header />
            <div className="container">
                <div className="d-flex flex-row justify-content-center">
                    <RecipeForm />
                </div>
            </div>
        </div>
    );
}

export default RecipeBox;