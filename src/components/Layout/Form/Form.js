import React from 'react'

import "./Form.css";

const Form = (props) => {
    return (
        <div className="d-flex flex-column ">
            <div className="justify-content-center">
                <h3 className="form__header">Search for Recipes via Ingredient!</h3>
            </div>
            <div className="justify-content-center">
                <form onSubmit={props.getRecipe} className="form__margin">
                    <input 
                        type="text" 
                        name="recipeName" 
                        className="form__input"
                    />
                    <button className="form__button">SEARCH</button>
                </form>
            </div>
        </div>
    )
}

export default Form
