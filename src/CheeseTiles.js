import React, { Component } from 'react';
import CheeseCard from './CheeseCard';

class CheeseTiles extends Component {

    renderCheeseTiles() {
        // console.log(this.props)

        return this.props.cheeses.map(cheese => {
            return <CheeseCard
                key={cheese.id}
                {...cheese}
            />
        })
    }

    render() {
        return (
            <div className="Cheese-Tiles">
                {this.renderCheeseTiles()}
            </div>
        )
    }
}




export default CheeseTiles;
