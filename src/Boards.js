import React, { Component } from 'react';
import CheeseTiles from './CheeseTiles';
import NewBoard from './NewBoard';

class Boards extends Component {

    state = {
        flavor: "all",
        mildCheese: []
    }

    // add Click Handler to Tiles to add cheese tile to Board
    // Make a save button
    // Make a clear button to remove all cheeses from board



    renderCheeses = () => {

        let filteredByFlavor;
    
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
         return filteredByFlavor
    }

    changeFlavor = (newFlavor) => {
        this.setState({
            flavor: newFlavor
        })
    }

    addCheese = (cheese) => {
       
          if (!this.state.mildCheese.find(c => c.id === cheese.id) &&
            !this.state.mildCheese.find(c => c.flavor === cheese.flavor)) {
            this.setState({ mildCheese: [...this.state.mildCheese, cheese] })
        } 
    }


    
    render() {
        return (
            <div>
                <h2>Boards</h2>
                <NewBoard changeFlavor={this.changeFlavor}
                            mildCheese={this.state.mildCheese}
                             />     
                <CheeseTiles cheeses={this.renderCheeses()}
                               clickHandler={this.addCheese} />
            </div>
        );
    }
}

export default Boards;
