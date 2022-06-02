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
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { DISHES } from '../shared/dishes';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    
    render() {
        const _dishes = this.state.dishes;

        return (
            <div>
                <Header />

                <Routes>
                    <Route path='/home'
                        element={<Home
                            dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                        />}
                     />
                    <Route exact path='/menu' element={<Menu dishes={_dishes} />} />
                    <Route exact path='/contactus' element={<Contact />} />


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