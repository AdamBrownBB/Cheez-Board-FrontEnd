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

  renderCheeses = () => {
    let filteredByFlavor;
    console.log(cheeses)

    // switch (this.state.flavor) {
    //   case "mild":
    //     filteredByFlavor = cheeses.filter((cheese) => {
    //       return cheese.flavor === mild
    //     })
    //     break;
    
    //   default:
    //     break;
    // }
  }

 
  render() {
    return (
      <div>
        < NavBar  changeFlavor={this.changeFlavor}
                  changeTexture={this.changeTexture}
                  changeMilk={this.changeMilk}
                  />
        < MainBody renderCheeses={this.renderCheeses()}/>
      
      </div>
    )
  }
}  

export default App;
