import React from 'react';
import "./DummyCards.css";


const DummyCards = (props) => {
    if(props.recipeTitle.length < 20 || props.recipeCreator < 20){
        return (
            <div className="col-md-4">
                <div className="card cardSpacing">
                    <img src={props.recipeImage} className="card-img-top" alt={props.recipeTitle} />
                    <div className="card-body">
        
                        <h5 className="card-title">{props.recipeTitle}</h5>
        
                        <p className="card-text">{props.recipeCreator}</p>
                    </div>
                    {props.children}
                </div>
            </div>
        )
    } else {
        return (
            <div className="col-md-4">
                <div className="card cardSpacing">
                    <img src={props.recipeImage} className="card-img-top" alt={props.recipeTitle} />
                    <div className="card-body">
                        <h5 className="card-title">{props.recipeTitle.substring(0,20)}...</h5>
        
                        <p className="card-text">{props.recipeCreator}</p>
                    </div>
                    {props.children}
                </div>
            </div>
        )
    }
}

export default DummyCards
