import React, { Component } from 'react';
import CheeseTiles from './CheeseTiles';

class Boards extends Component {

    state = {
        flavor: "all"
    }

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
            case "bleu":
                filteredByFlavor = this.props.cheeses.filter((cheese) => {
                    return cheese.flavor === "bleu"
                })
                break;
         }    
         return filteredByFlavor
    }
    
    render() {
        console.log(this.props.cheeses)

        return (
            <div>
                <h2>Boards</h2>
                
                <CheeseTiles cheeses={this.renderCheeses()}/>
            </div>
        );
    }
}

export default Boards;
