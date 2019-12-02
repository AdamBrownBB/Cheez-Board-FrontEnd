import React, { Component }  from 'react';
import './App.css';
import MainBody from './MainBody';
import NavBar from './NavBar';

class App extends Component {

  state ={
    flavor: "all",
    texture: "all",
    milk: "all",
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
    let flavoredAndTextured;
    let milkAndFlavorAndTexture; 

    switch (this.state.flavor) {
      case "all":
        filteredByFlavor = this.state.cheeses
        break;
        
      case "mild":
          filteredByFlavor = this.state.cheeses.filter((cheese) => {
          return cheese.flavor === "mild"
          })
          break;
      case "medium":
        filteredByFlavor = this.state.cheeses.filter((cheese) => {
          return cheese.flavor === "medium"
        })
        break;
      case "bleu":
        filteredByFlavor = this.state.cheeses.filter((cheese) => {
          return cheese.flavor === "bleu"
        })
        break;
    }

    

    switch (this.state.texture) {
      case "all":
        flavoredAndTextured = filteredByFlavor
        break;
      case "soft":
        flavoredAndTextured = [...filteredByFlavor].filter((cheese) => {
          return cheese.texture === "soft"
        })
        break;
      case "semi-soft":
        flavoredAndTextured = [...filteredByFlavor].filter((cheese) => {
          return cheese.texture === "semi-soft"
        })
        break;
      case "hard":
        flavoredAndTextured = [...filteredByFlavor].filter((cheese) => {
          return cheese.texture === "hard"
        })
        break;  
        
    }

    switch (this.state.milk) {
      case "all":
        milkAndFlavorAndTexture = flavoredAndTextured
        break;
      case "cow":
        milkAndFlavorAndTexture = [...flavoredAndTextured].filter((cheese) => {
          return cheese.milk === "cow"
        })
        break;
      case "sheep":
        milkAndFlavorAndTexture = [...flavoredAndTextured].filter((cheese) => {
          return cheese.milk === "sheep"
        })
        break;
      case "goat":
        milkAndFlavorAndTexture = [...flavoredAndTextured].filter((cheese) => {
          return cheese.milk === "goat"
        })
        break;

    }
    return milkAndFlavorAndTexture
  }

 
  render() {
    return (
      <div>
        < NavBar  changeFlavor={this.changeFlavor}
                  changeTexture={this.changeTexture}
                  changeMilk={this.changeMilk}
                  />
        < MainBody cheeses={this.renderCheeses()}/>
      </div>
    )
  }
 
}
export default App;
