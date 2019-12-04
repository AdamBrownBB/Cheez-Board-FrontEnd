import React, { Component } from 'react';
import CheeseCard from './CheeseCard';


class Mild extends Component {


    renderCheeseCard() {
        return this.props.mildCheese.map(cheese => {
            return <CheeseCard key={cheese.id}
                clickHandler={this.props.clickHandler}
                cheese={cheese}
            />
        })
    }


    render() {
        return (
            <div className="cheese-area" >
                <button onClick={this.props.clickHandler} value="mild">Add Mild Cheese</button>
                {this.renderCheeseCard()}
            </div> 
        );
    }
}

export default Mild;
