import React, { Component } from 'react'

// Imports
import Form from "../../components/Layout/Form/Form";
import Body from "../../components/Layout/Body/Body";

class Display extends Component {
    state = {
        recipeQuery: "",
        queryResult: []
    }

    getRecipe = (event) => {
        event.preventDefault();

        const recipeName = event.target.elements.recipeName.value

        console.log(recipeName);

        const API_KEY = "cc1fccaf7f4e4ed01993784dbc55743f"
        const URL = `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=16`
        
        fetch(URL).then((response) => response.json()).then((data) => {
            console.log(this.state.recipeQuery);
            console.log(data.recipes);
            this.setState({
                recipeQuery: recipeName,
                queryResult: data.recipes
            });
        }).catch((err) => alert(
            `Sorry, but there was a problem getting some recipe data from the Food2Fork API. Here's some information on what went wrong: 
              ${err}
            `
        ));
    }

    // Lifecycle Methods...ooOOoo!
    componentDidMount = () => {
        const json = localStorage.getItem("queryResult");
        const recipes = JSON.parse(json);
        this.setState({
            queryResult: recipes
        });
    }

    componentDidUpdate = () => {
        const queryResult = JSON.stringify(this.state.queryResult);
        localStorage.setItem("queryResult", queryResult);
    }
    

    render() {

        let recipes = null;

        if(this.state.recipeQuery.length >= 3){
            recipes = (
                <div className="row">
                    {this.state.queryResult.map(rezzies => {
                        return(
                            <Body 
                                getQuery={this.state.recipeQuery}
                                getResults={this.state.queryResult}

                                key={rezzies.recipe_id}
                                specialKey={rezzies.recipe_id}
                                image={rezzies.image_url}
                                publisher={rezzies.publisher}
                                url={rezzies.f2f_url}
                                title={rezzies.title}
                            />
                        ) 
                    })};
                </div>
            );
        };

        return (
            <div className="container">
                <Form getRecipe={this.getRecipe} />
                {recipes}
            </div>
        )
    }
}

export default Display;
