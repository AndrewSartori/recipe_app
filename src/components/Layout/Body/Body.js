import React from 'react'

import Card from "./Card/Card";

const Body = (props) => {
    return (
        <div className="col-md-4">
            <Card 
                searchQuery={props.getQuery}
                searchResults={props.getResults}

                recipe_id={props.specialKey}
                recipeImage={props.image}
                recipePublisher={props.publisher}
                recipeURL={props.url}
                recipeTitle={props.title}
            />
            {props.children}
        </div>
    )
}

export default Body
