import React, { Component } from 'react';
import CheeseContainer from './CheeseContainer';
import Boards from './Boards';

import { Route, Switch } from 'react-router-dom'
import NewCheeseForm from './NewCheeseForm';

class MainBody extends Component {

    state = {
        cheeses: []
    }

    addCheese = (newCheese) => {
        this.setState({
            cheeses: [...this.state.cheeses, newCheese]
        })
    }

    componentDidMount() {
        this.fetchCheeses()
    }

    fetchCheeses = () => {
        fetch("http://localhost:3001/cheeses")
            .then(resp => resp.json())
            .then(data =>
                this.setState({
                    cheeses: data
                }))
          
    }

    renderCheeseContainer = () => {
        return < CheeseContainer cheeses={this.state.cheeses} />
    }

    renderBoards = () => {
        return < Boards cheeses={this.state.cheeses} />
    }

    renderNew = () => {
        return < NewCheeseForm addCheese={this.addCheese}/>
    }
    


    render() {

        return (
            <div>
                <Switch>
                    <Route path="/cheeses" render={this.renderCheeseContainer}  />
                    <Route path="/boards" render={this.renderBoards}  />
                    <Route path="/new" render={this.renderNew} />
                </Switch>
            </div>
        );
    }
}


export default MainBody;
