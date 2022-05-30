import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Routes, Route, Navigate } from 'react-router-dom';
/* import { Switch, Route, Redirect } from 'react-router-dom';
        Switch & Redirect has been removed from React router v6, and replaced Routes and Navigate*/
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    
    render() {
        const _dishes = this.state.dishes;

        return (
            <div>
                <Header />

                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route exact path='/menu' element={<Menu dishes={_dishes} />} />

                    <Route path="/" element={<Navigate to="/home" replace />} />
                    {/* <Route path='/home' component={HomePage} />
                    'component' replaced 'element', must set value is "Component" */}
                </Routes>

                <Footer />
            </div>
        );
    }
}

export default Main;