import React, { Component } from 'react';
import CheeseContainer from './CheeseContainer';
import Boards from './Boards';

import { Route, Switch } from 'react-router-dom'

class MainBody extends Component {

    state = {
        cheeses: []
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
    


    render() {

        return (
            <div>
                <Switch>
                    <Route path="/cheeses" render={this.renderCheeseContainer}  />
                    <Route path="/boards" render={this.renderBoards}  />
                </Switch>
            </div>
        );
    }
}


export default MainBody;
