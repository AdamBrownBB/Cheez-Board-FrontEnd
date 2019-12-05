import React, { Component } from 'react';
import Mild from './Mild';
import Medium from './Medium';
import Bold from './Bold';
import Bleu from './Bleu';


export class NewBoard extends Component {

    clickHandler = (e) => {
      this.props.changeFlavor(e.target.value)
    }


    render() {
        return (

            <div id="top_div">
                <Mild clickHandler={this.clickHandler}
                    mildCheese={this.props.mildCheese}/>
                <Medium clickHandler={this.clickHandler}
                    mediumCheese={this.props.mediumCheese} />
                <Bold clickHandler={this.clickHandler}
                    boldCheese={this.props.boldCheese} />
                <Bleu clickHandler={this.clickHandler}
                    bleuCheese={this.props.bleuCheese} />               
                
            </div>
            
       
        );
    }
}

export default NewBoard;
