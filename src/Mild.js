import React, { Component } from 'react';
import CheeseCard from './CheeseCard';


class Mild extends Component {


    renderCheeseCard() {
        if (this.props.mildCheese) {
        return <CheeseCard key={this.props.mildCheese.id}
                clickHandler={this.props.clickHandler}
            cheese={this.props.mildCheese} /> 
        } else {
            return null
        }
    }


    render() {
        return (
            <div className="cheese-area" >
                <button onClick={this.props.clickHandler} value="mild">Show Mild Cheeses</button>
                {this.renderCheeseCard()}
            </div> 
        );
    }
}

export default Mild;
