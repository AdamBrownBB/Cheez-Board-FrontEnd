import React, { Component } from 'react';

class Filters extends Component {

    flavorFilter = (e) => {
        this.props.changeFlavor(e.target.value)
    }

    textureFilter = (e) => {
        this.props.changeTexture(e.target.value)
    }

    milkFilter = (e) => {
        this.props.changeMilk(e.target.value)
    }


    render() {
        return (
            <div>
                <h1>filters</h1>
                <h3>Flavor: </h3>
                <select onChange={this.flavorFilter}>
                    <option value="all">All</option>
                    <option value="mild">Mild</option>
                    <option value="medium">Medium</option>
                    <option value="bleu">Bleu</option>
                </select>
                <h3>Texture: </h3>
                <select onChange={this.textureFilter}>
                    <option value="all">All</option>
                    <option value="soft">Soft</option>
                    <option value="semi-soft">Semi-soft</option>
                    <option value="hard">Hard</option>
                </select>
                <h3>Milk: </h3>
                <select onChange={this.milkFilter}>
                    <option value="all">All</option>
                    <option value="cow">Cow</option>
                    <option value="sheep">Sheep</option>
                    <option value="goat">Goat</option>
                </select>
            </div>
        );
    }
}

export default Filters;
