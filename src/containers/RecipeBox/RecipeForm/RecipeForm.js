import React, { Component } from 'react'

class RecipeForm extends Component {
    state = {
        title: "",
        imageURL: "",
        creator: ""
    }

    // Build and Submit form (check that it's working)
        // Validation?

    // The inputHandler will persist data to my state, and submitListener will then submit that data to firebase (as well as clear the input fields)
    submitListener = (event) => {
        event.preventDefault();
        console.log(`FORM SUBMITTED! Title: ${this.state.title}, URL: ${this.state.imageURL}, and Creator: ${this.state.creator}`);

        // fetch('https://recipebox-51bdc.firebaseio.com/', {
        //     method: 'post',
        //     headers: {
        //         'Accept': 'application/json, text/plain, */*',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({a: 7, str: 'Some string: &=&'})
        //     }).then(res=>res.json()).then(res => console.log(res));

        this.setState({
            title: "",
            imageURL: "",
            creator: ""
        });
    }

    inputHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }
 
    render() {
        console.log(this.state);
        return (
            <div>
                <form onSubmit={this.submitListener}>
                    <p>
                        <label>Recipe Title</label>
                        <input 
                            type="text" 
                            name="title" 
                            id="title" 
                            value={this.state.title} 
                            onChange={this.inputHandler} />
                    </p> 
                    <p>
                        <label>Recipe Image URL</label>
                        <input 
                            type="text" 
                            name="imageURL" 
                            id="imageURL" 
                            value={this.state.imageURL} 
                            onChange={this.inputHandler} />
                    </p> 
                    <p>
                        <label>Recipe Creator</label>
                        <input 
                            type="text" 
                            name="creator" 
                            id="creator" 
                            value={this.state.creator} 
                            onChange={this.inputHandler} />
                    </p> 
                    <p>
                        <button type="submit">SUBMIT</button>
                    </p>   
                </form>
            </div>
        )
    }
}

export default RecipeForm;
