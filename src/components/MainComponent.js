import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
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

        const HomePage = () => {
            return(
              <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                
              />
            );
          }

          const DishWithId = ({match}) => {
            console.log(this.props.dishes)
            return(
              
              <DishDetail dish={this.props.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
                
                comments={this.props.comments.filter((comment) => comment.dish === match.params.dishId)}
                
            
                />
              
            );
          }

        return (
            <div>
                <Header />

                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
                </Switch>

                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));