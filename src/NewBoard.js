import React, { Component } from 'react';

export class NewBoard extends Component {

    clickHandler = (e) => {
      this.props.changeFlavor(e.target.value)
    }
 



    render() {
        return (

           
            <div id="top_div">
                <button onClick={this.clickHandler} value="mild">Add Mild Cheese</button>
                <button onClick={this.clickHandler} value="medium">Add Medium Cheese</button>
                <button onClick={this.clickHandler} value="bold">Add Bold Cheese</button>
                <button onClick={this.clickHandler} value="bleu">Add Bleu Cheese</button>
            </div>
        );
    }
}

export default NewBoard;
