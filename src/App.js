import React, { Component }  from 'react';
import './App.css';
import MainBody from './MainBody';
import NavBar from './NavBar';
import Home from './Home';
import { Route } from 'react-router-dom'


class App extends Component {

  renderHome = () => {
        return < Home />
    }

  render() {
    return (
      <div>
        < NavBar />
            <Route exact path="/" render={this.renderHome}  />
        < MainBody />
      </div>
    )
  }
 
}
export default App;
