import React, { Component }  from 'react';
import './App.css';
import MainBody from './MainBody';
import NavBar from './NavBar';

class App extends Component {

  state ={
    flavor: "all",
    texture: "all",
    milk: "all"
  }

  changeFlavor = (newFlavor) => {
    this.setState({
      flavor: newFlavor
    })
  }

  changeTexture = (newTexture) => {
    this.setState({
      texture: newTexture
    })
  }

  changeMilk = (newMilk) => {
    this.setState({
      milk: newMilk
    })
  }
 
  render() {
    return (
      <div>
        < NavBar  changeFlavor={this.changeFlavor}
                  changeTexture={this.changeTexture}
                  changeMilk={this.changeMilk}
                  />
        < MainBody />
      
      </div>
    )
  }
}  

export default App;
