import React, { Component } from 'react';

class NewCheeseForm extends Component {

    state = {
        name: "",
        texture: "",
        flavor: "",
        milk: "",
        image: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:3001/cheeses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(cheese => {
                this.props.addCheese(cheese)
            })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Name"
                        name="name"
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Texture"
                        name="texture"
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Flavor"
                        name="flavor"
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Milk"
                        name="milk"
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Image URL"
                        name="image"
                        onChange={this.handleChange}
                    />
                                      
                    <input
                        type="submit"
                        value="Create a Cheese!"
                    />
                </form>
            </div>
        );
    }

}



export default NewCheeseForm;