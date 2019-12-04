import React, { Component } from 'react';
import Mild from './Mild';
// import Medium from './Medium';


export class NewBoard extends Component {

    clickHandler = (e) => {
      this.props.changeFlavor(e.target.value)
    }



 
    render() {
        return (

         
            <div id="top_div">
                <Mild clickHandler={this.clickHandler}
                    cheese={this.props.mildCheese}/>
          
                <div className="cheese-area" >
                    <button onClick={this.clickHandler} value="bold">Add Bold Cheese</button>
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
