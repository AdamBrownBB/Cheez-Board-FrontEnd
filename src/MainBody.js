import React, { Component } from 'react';
import CheeseIndex from './CheeseIndex';

// import { Route, Switch, Redirect } from 'react-router-dom'

class MainBody extends Component {

    state = {
        cheeses: []
    }

    componentDidMount(){
        this.fetchCheeses()
    }

    fetchCheeses = () => {
        fetch("http://localhost:3001/cheeses")
        .then (resp => resp.json())
        .then (data => 
            this.setState({
                cheeses: data
            }))
    }

    renderIndex = () => {
       
        return < CheeseIndex cheeses={this.state.cheeses}/>
          }

    
    render() {
        return (
            <div>
                <CheeseIndex renderIndex={this.renderIndex}
                                cheeses={this.state.cheeses}
                                renderCheeses={this.props.renderCheeses}/>
            </div>
        );
    }
}



// lol test

export default MainBody;
