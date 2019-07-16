import React, { Component } from 'react'
import axios from "axios";

import "./RecipeForm.css";

// Imports
import DummyCards from "./DummyCards/DummyCards";

class RecipeForm extends Component {
    state = {
        key: Number,
        title: "",
        imageURL: "",
        creator: "",
        dummyData: []
    }


    // In lieu of a DB and seeds file, I'm going to populate this.state.dummyData with the data, below.
    componentWillMount(){
        const dummy = [
            {
                key: 1,
                title: "Gumbo",
                imageURL: "https://www.jessicagavin.com/wp-content/uploads/2014/03/pot-of-chicken-sausage-gumbo-1200.jpg",
                creator: "Our Lord and Saviour"
            },
            {
                key: 2,
                title: "Fried Cheeckin",
                imageURL: "https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Crispy-Fried-Chicken_EXPS_FRBZ19_6445_C01_31_3b.jpg",
                creator: "Colonel Sanders"
            },
            {
                key: 3,
                title: "BBQ Brisket",
                imageURL: "https://www.traegergrills.com/images/en-us/Shared/images/recipes/banners/Beef/Texas-Style-BBQ-Brisket-Scheiding_Traeger-Wood-Pellet-Grills_RE_HE_M.jpg",
                creator: "Herakles of Thebes"
            }
        ]
        this.setState({
            dummyData: dummy
        })
    }


    // The inputHandler will persist data to my state, and submitListener will then submit that data to firebase (as well as clear the input fields)
    submitListener = (event) => {
        event.preventDefault();

        // .length-0 will find me the final element in an array. Neat!
        const lastRecipe = this.state.dummyData.length-0;
        const newLastRecipe = lastRecipe + 1;
        console.log("LAST ELEMENT IN THE ARRAY: " + lastRecipe + "...NOW, WHAT WOULD THE NEXT ELEMENT BE?..." + newLastRecipe);

        const postRecipes = {
            key: newLastRecipe,
            title: this.state.title,
            imageURL: this.state.imageURL,
            creator: this.state.creator
        }

        axios.post("https://jsonplaceholder.typicode.com/posts", postRecipes).then((response) => console.log("TESTING AXIOS POST-RESPONSE " + response)).catch((error) => console.log(error));

        this.setState({
            title: "",
            imageURL: "",
            creator: "",
            dummyData: [...this.state.dummyData, postRecipes]
        });
    }


    inputHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }
 
    deleteRecipe = (event) => {
        const array = [...this.state.dummyData];
        const index = array.indexOf(event.target.key);
        if(index !== -1){
            array.splice(index, -1);
            this.setState({
                dummyData: array
            });
        }
    }

    render() {
        let recipes = null;

        if(this.state.dummyData){
            recipes = (
                <div className="row">
                    {this.state.dummyData.map(rezzies => {
                        return(   
                            <DummyCards 
                                key={rezzies.key}
                                specialKey={rezzies.key}

                                deleteRecipe={this.deleteRecipe}

                                recipeTitle={rezzies.title}
                                recipeImage={rezzies.imageURL}
                                recipeCreator={rezzies.creator}
                            />
                        )
                    })}
                </div>
            )
        }

        const chefs = ["Gordon", "Wolfgang", "Jamie", "Emrille", "Bobby", "Morimoto"];
        const randomChefs = chefs[Math.floor(Math.random() * chefs.length)];
        
        return (
            <div>
                <h5 className="form__title">Hate what recipes you've seen? Well then, <span className="form__chefs">{randomChefs}</span> add your own!</h5>
                <form onSubmit={this.submitListener}>
                    <div className="form-group">
                        <label><center>Recipe Title</center></label>
                        <input className="form-control"
                            type="text" 
                            name="title" 
                            id="title" 
                            value={this.state.title} 
                            onChange={this.inputHandler} />
                    </div>
                    <div className="form-group">
                        <label><center>Recipe Image URL</center></label>
                        <input className="form-control"
                            type="text" 
                            name="imageURL" 
                            id="imageURL" 
                            value={this.state.imageURL} 
                            onChange={this.inputHandler} />
                    </div>
                    <div className="form-group">
                        <label><center>Recipe Creator</center></label>
                        <input className="form-control"
                            type="text" 
                            name="creator" 
                            id="creator" 
                            value={this.state.creator} 
                            onChange={this.inputHandler} />
                    </div>  
                    <div>
                        <button type="submit" className="form__button">ADD NEW RECIPE!</button>
                    </div>
                </form>
                <hr />
                {recipes}
            </div>
        )
    }
}

export default RecipeForm;
