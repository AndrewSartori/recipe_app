import React from "react";

// Imports
import Header from "../../components/Layout/Header/Header";
import RecipeForm from "./RecipeForm/RecipeForm";

const RecipeBox = (props) => {
    return(
        <div>
            <Header />
            <div className="container">
                <RecipeForm />
            </div>
        </div>
    );
}

export default RecipeBox;