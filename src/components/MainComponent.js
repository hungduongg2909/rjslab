import React, { Component } from 'react';
import { Routes, Route, Navigate, withRouter } from 'react-router-dom';
/* import { Switch, Route, Redirect } from 'react-router-dom';
        Switch & Redirect has been removed from React router v6, and replaced Routes and Navigate*/
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { DISHES } from '../shared/dishes';
import { useLocation } from 'react-router-dom'

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
  }
class Main extends Component {

    constructor(props) {
        super(props);
        
    }


    
    render() {
        const _dishes = this.props.dishes;
        const _comments = this.props.comments;
        const _leaders = this.props.leaders;

        function DishWithId(props) {
            const location = useLocation();
            let match = location.pathname;

            return(
                <DishDetail
                    dish={props.dishes.filter((dish) => dish.id === Number(match.slice(6)))} 
                    comments={props.comments.filter((comment) => comment.dishId === Number(match.slice(6)))}
                />
            );
        };

        return (
            <div>
                <Header />

                <Routes>
                    <Route path='/home'
                        element={<Home
                            dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                            promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                            leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                        />}
                     />
                    <Route exact path='/menu' element={<Menu dishes={_dishes} />} />
                    <Route exact path='/contactus' element={<Contact />} />
                    <Route path='/menu/:dishId'
                        element={<DishWithId dishes={_dishes} comments={_comments} />}
                    />
                    <Route exact path='/aboutus' element={<About leaders={_leaders} />} />

                    <Route path="/" element={<Navigate to="/home" replace />} />
                    {/* <Route path='/home' component={HomePage} />
                    'component' replaced 'element', must set value is "Component" */}
                </Routes>

                <Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Main);