// import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';
import Menu from './Components/Menu';
import './App.css';
import { DISHES } from './share/dishes';

class App extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
          dishes: DISHES
      };
    }
  
    render() {

        return (
          <div>
              <Navbar dark color="primary">
                  <div className="container">
                      <NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
                  </div>
              </Navbar>
      
              <Menu dishes={this.state.dishes} />
          </div>
        );
    
    }
}

export default App;
