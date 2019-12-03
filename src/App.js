import React, { Component }  from 'react';
import './App.css';
import MainBody from './MainBody';
import NavBar from './NavBar';

class App extends Component {

  render() {
    return (
      <div>
        < NavBar />
        < MainBody />
      </div>
    )
  }
 
}
export default App;
