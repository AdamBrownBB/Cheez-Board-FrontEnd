import React, { Component } from 'react';
import CheeseCard from './CheeseCard';


class Medium extends Component {


    renderCheeseCard() {
        return this.props.mediumCheese.map(cheese => {
            return <CheeseCard key={cheese.id}
                clickHandler={this.props.clickHandler}
                cheese={cheese}
            />
        })
    }


    render() {
        return (
            <div className="cheese-area" >
                <button onClick={this.props.clickHandler} value="medium">Add Medium Cheese</button>
                {this.renderCheeseCard()}
            </div>
        );
    }
}

export default Medium;