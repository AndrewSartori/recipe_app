import React from 'react'
import { Link } from "react-router-dom";
import "./Card.css";


const Card = (props) => {
    if(props.recipeTitle.length < 20){
        return (
            <div className="card cardSpacing">
                <img src={props.recipeImage} className="card-img-top" alt={props.recipeTitle} />
                <div className="card-body">
    
                    <h5 className="card-title">{props.recipeTitle}</h5>
    
                    <p className="card-text">{props.recipePublisher}</p>
                    <p className="recipeURL">{props.recipeURL}</p>
                    <button className="recipe_buttons">
                        <Link to={{ 
                            pathname: `/show_card/${props.recipe_id}`,
                            state: { recipe: props.recipeTitle}
                        }}>VIEW FULL RECIPE</Link>
                    </button>
                </div>
                {props.children}
            </div>
        )
    } else {
        return (
            <div className="card cardSpacing">
                <img src={props.recipeImage} className="card-img-top" alt={props.recipeTitle} />
                <div className="card-body">
                    <h5 className="card-title">{props.recipeTitle.substring(0,20)}...</h5>
    
                    <p className="card-text">{props.recipePublisher}</p>
                    <p className="recipeURL">{props.recipeURL}</p>
                    <button className="recipe_buttons">
                        <Link to={{ 
                            pathname: `/show_card/${props.recipe_id}`,
                            state: { recipe: props.recipeTitle}
                        }}>VIEW FULL RECIPE</Link>
                    </button>
                </div>
                {props.children}
            </div>
        )
    }
}

export default Card;