import React, { Component } from 'react';
import CheeseTiles from './CheeseTiles';
import Filters from './Filters';

class CheeseContainer extends Component {

    state = {
        flavor: "all",
        texture: "all",
        milk: "all",
    }
    
    renderCheeses = () => {
        let filteredByFlavor;
        let flavoredAndTextured;
        let milkAndFlavorAndTexture;

        switch (this.state.flavor) {
            case "all":
                filteredByFlavor = this.props.cheeses
                break;

            case "mild":
                filteredByFlavor = this.props.cheeses.filter((cheese) => {
                    return cheese.flavor === "mild"
                })
                break;
            case "medium":
                filteredByFlavor = this.props.cheeses.filter((cheese) => {
                    return cheese.flavor === "medium"
                })
                break;
            case "bold":
                filteredByFlavor = this.props.cheeses.filter((cheese) => {
                    return cheese.flavor === "bold"
                })
                break;
            case "bleu":
                filteredByFlavor = this.props.cheeses.filter((cheese) => {
                    return cheese.flavor === "bleu"
                })
                break;
        }
       
        switch (this.state.texture) {
            case "all":
                flavoredAndTextured = filteredByFlavor
                break;
            case "soft":
                flavoredAndTextured = [...filteredByFlavor].filter((cheese) => {
                    return cheese.texture === "soft"
                })
                break;
            case "semi-soft":
                flavoredAndTextured = [...filteredByFlavor].filter((cheese) => {
                    return cheese.texture === "semi-soft"
                })
                break;
            case "hard":
                flavoredAndTextured = [...filteredByFlavor].filter((cheese) => {
                    return cheese.texture === "hard"
                })
                break;
        }

        switch (this.state.milk) {
            case "all":
                milkAndFlavorAndTexture = flavoredAndTextured
                break;
            case "cow":
                milkAndFlavorAndTexture = [...flavoredAndTextured].filter((cheese) => {
                    return cheese.milk === "cow"
                })
                break;
            case "sheep":
                milkAndFlavorAndTexture = [...flavoredAndTextured].filter((cheese) => {
                    return cheese.milk === "sheep"
                })
                break;
            case "goat":
                milkAndFlavorAndTexture = [...flavoredAndTextured].filter((cheese) => {
                    return cheese.milk === "goat"
                })
                break;
        }
        return milkAndFlavorAndTexture
    }

    changeFlavor = (newFlavor) => {
        this.setState({
            flavor: newFlavor
        })
    }

    changeTexture = (newTexture) => {
        this.setState({
            texture: newTexture
        })
    }

    changeMilk = (newMilk) => {
        this.setState({
            milk: newMilk
        })
    }

    render() {
        return (
            <div>
                <Filters changeFlavor={this.changeFlavor}
                         changeTexture={this.changeTexture}
                         changeMilk={this.changeMilk}/>
                <CheeseTiles cheeses={this.renderCheeses()}/>
            </div>
        );
    }
}

export default CheeseContainer;
