import React, { Component } from 'react';
import CheeseIndex from './CheeseIndex';

// import { Route, Switch, Redirect } from 'react-router-dom'

class MainBody extends Component {

    renderIndex = () => {
       
        return < CheeseIndex cheeses={this.state.cheeses}/>
          }

    
    render() {
        return (
            <div>
                <CheeseIndex renderIndex={this.renderIndex}
                                cheeses={this.props.cheeses}
                                />
            </div>
        );
    }
}


export default MainBody;
