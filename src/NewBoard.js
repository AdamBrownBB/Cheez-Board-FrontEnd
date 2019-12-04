import React, { Component } from 'react';

export class NewBoard extends Component {

    clickHandler = (e) => {
      this.props.changeFlavor(e.target.value)
    }
 



    render() {
        return (

         
            <div id="top_div">
               <div className="cheese-area" >
                    <button onClick={this.clickHandler} value="mild">Add Mild Cheese</button>
                </div> 
                <div className="cheese-area" >
                    <button onClick={this.clickHandler} value="medium">Add Medium Cheese</button>
                </div>   
                <div className="cheese-area" >
                    <button onClick={this.clickHandler} value="bold">Add Bold Cheese</button>
                </div>
                <div className="cheese-area" >
                    <button onClick={this.clickHandler} value="bleu">Add Bleu Cheese</button>
                </div>
            </div>
            
       
        );
    }
}

export default NewBoard;
