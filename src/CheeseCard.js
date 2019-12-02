import React, { Component } from 'react';

export class CheeseCard extends Component {
    render() {
        return (
            <div className="image-cont">
                <img className="image" alt={this.props.name} src={this.props.image} />
                <h1> {this.props.name} </h1>
            </div>
        );
    }
}

export default CheeseCard;
