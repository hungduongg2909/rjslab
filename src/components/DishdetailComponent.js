import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Label,
    Modal, ModalHeader, ModalBody, Button, Row, Col } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }


    render() {
        if (this.props.dish != null)
            return(
                <div className="container">
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <ul className="list-unstyled">
                                {
                                    this.props.dish.comments.map((comment) => {
                                        return (
                                            <div in key={comment._id}>
                                                <li>
                                                <p>{comment.comment}</p>
                                                <p>{comment.rating} stars</p>
                                                <p>
                                                    -- {comment.author} ,
                                                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
                                                    .format(new Date(Date.parse(comment.date)))}
                                                </p>
                                                </li>
                                            </div>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            );
        else
            return(
                <div></div>
            );
    }
}

export default DishDetail;