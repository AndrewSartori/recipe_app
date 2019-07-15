import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./FullCard";

// Imports
import Header from "../../Header/Header";

class FullCard extends Component {
    state = {
        currentCard: {
            title: "",
            image_url: "",
            publisher: "",
            recipe_id: ""
        }
    }

    componentDidMount = () => {
        console.log(this.props);

        const currentRecipeName = this.props.location.state.recipe;

        const recipeUniquePath = this.props.location.pathname;

        const cardID = recipeUniquePath.substr(recipeUniquePath.length - 5); 

        console.log(recipeUniquePath);
        console.log("THIS IS THE RECIPE NAME: " + currentRecipeName);
        console.log("THIS IS THE CARD PATH: " + recipeUniquePath);
        console.log("THIS IS THE CARD'S ID: " + cardID);


        const API_KEY = "cc1fccaf7f4e4ed01993784dbc55743f";
        const URL = `https://www.food2fork.com/api/search?key=${API_KEY}&q=${currentRecipeName}`;
        
        fetch(URL).then((response) => response.json()).then((data) => {
            const checkRecipeID = data.recipes;

            console.log(checkRecipeID);
            console.log(cardID);

            checkRecipeID.map(check => {
                if(check.recipe_id === cardID){
                    console.log("ORIGINAL CARD: " + cardID);
                    console.log("ENSURE THAT THE CARD'S ID'S MATCH: " + check.recipe_id);

                    this.setState({
                        currentCard: {
                            title: check.title,
                            image_url: check.image_url,
                            publisher: check.publisher,
                            recipe_id: check.recipe_id
                        }
                    });
                };
            });            
        }).catch((err) => alert(
            `Sorry, but there was a problem getting some recipe data from the Food2Fork API. Here's some information on what went wrong: 
              ${err}
            `
        ));
    };


    render() {
        console.log(this.state.currentCard);

        return (
            <div>
                <Header />
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="card cardSpacing">
                            <img 
                                src={this.state.currentCard.image_url} className="card-img-top" 
                                alt={this.state.currentCard.title} />
                            <div className="card-body">
                
                                <h5 className="card-title">{this.state.currentCard.title}</h5>
                
                                <p className="card-text">{this.state.currentCard.publisher}</p>
                                <button className="recipe_buttons">
                                    <Link to={{ 
                                        pathname: `/`
                                    }}>Wanna Go Back?!</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FullCard;