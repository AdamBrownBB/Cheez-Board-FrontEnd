import React, { Component } from 'react';
import CheeseCard from './CheeseCard';


class Bleu extends Component {


    renderCheeseCard() {
        if (this.props.bleuCheese) {
            return <CheeseCard key={this.props.bleuCheese.id}
                clickHandler={this.props.clickHandler}
                cheese={this.props.bleuCheese} />
        } else {
            return null
        }
    }


    render() {
        return (
            <div className="cheese-area" >
                <button onClick={this.props.clickHandler} value="bleu">Show Bleu Cheeses</button>
                {this.renderCheeseCard()}
            </div>
        );
    }
}

export default Bleu;