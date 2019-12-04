import React, { Component } from 'react';

export class CheeseCard extends Component {
    render() {
        return (
            <div className="cheese-card" onClick={() => {this.props.clickHandler(this.props.cheese)}}>
                <img id="image" alt={this.props.cheese.name} src={this.props.cheese.image} />
                 {this.props.cheese.name} 
            </div>
        );
    }
}

export default CheeseCard;
