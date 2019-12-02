import React, { Component } from 'react';
import CheeseCard from './CheeseCard';

class CheeseIndex extends Component {

    renderCheeses() {
        return this.props.cheeses.map(cheese => {
            return <CheeseCard
                key={cheese.id}
                {...cheese}
            />
        })
    }

    render() {
        return (
            <div className="Cheese-index">
                {this.renderCheeses()}
            </div>
        )
    }
}




export default CheeseIndex;
