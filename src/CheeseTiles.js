import React, { Component } from 'react';
import CheeseCard from './CheeseCard';

class CheeseTiles extends Component {

    renderCheeseTiles() {

        return this.props.cheeses.map(cheese => {
            return <CheeseCard  key={cheese.id}
                             clickHandler={this.props.clickHandler}
                              cheese={cheese}
               
            />
        })
    }

    render() {
        return (
            <div className="Cheese-Tiles" id="bottom_div">
                {this.renderCheeseTiles()}
            </div>
        )
    }
}




export default CheeseTiles;
