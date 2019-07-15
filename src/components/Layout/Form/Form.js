import React from 'react'

import "./Form.css";

const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.getRecipe} className="form__margin">
                <input 
                    type="text" 
                    name="recipeName" 
                    className="form__input"
                />
                <button className="form__button">SEARCH</button>
            </form>
        </div>
    )
}

export default Form
