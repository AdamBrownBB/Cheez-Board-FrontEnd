import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class NavBar extends Component {




    render() {
        return (
            <div className="navbar">
               {/* <Link className="logo" to="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklgvQva7a_z1HHnyhf1nhF9M21LfQhJSZ0D3E8aGnTjvUdE4D4A&s" alt='logo'/>   
                </Link>  */}
               <h1>Cheez Board</h1>

               <Link to="/cheeses" >
                 <button>All of the Cheez</button> 
               </Link>
                <Link to="/boards" >
                 <button>Cheez Boards</button> 
                </Link>
                <Link to="/new">
                    <button>Make a new Cheese</button>
                </Link>

                
            </div>
        );
    }
}


export default NavBar;
