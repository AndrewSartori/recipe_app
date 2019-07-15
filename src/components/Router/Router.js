import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Imports
import App from "../../App";
import FullCard from "../Layout/Body/FullCard/FullCard";
import RecipeBox from "../Layout/RecipeBox/RecipeBox";

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/show_card/:id" component={FullCard} />
                <Route path="/recipebox" component={RecipeBox} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;