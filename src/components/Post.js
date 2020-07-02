import React, { Component } from "react";
import '../styles/item.css';
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import { Button, Form } from 'react-bootstrap';

export default class Post extends Component {
    constructor(props){
        super(props);
    }

    changeRating( newRating, name ) {
      alert("Rating functionality yet to come! You rated product: " + newRating + " stars.")
    }
    
    onComment = (event) => {
      event.preventDefault();
      alert("Comment functionality yet to come! We will make sure to let our farmers know what you think!")
    }
    render() {
        const order = this.props.order;
        const name = this.props.name;
        const price = this.props.price;
        const image = this.props.image;
        const farm = this.props.farm;
        const status = this.props.status;
        const randomstars = (Math.random() * (5.00))
        console.log(randomstars)
        return (
          <div classname = "Product"> 
            <article className="Post" ref="Post">
                <div className="Post-farmer"> 
                  <Link 
                    to={{
                      pathname: '/farm',
                      query: { farm: farm }
                    }}
                  >
                    {farm}
                  </Link>
                </div>
                <h2 className="Post-status" style={{color: status === true ? "green" : "red"}}> 
                  In Stock: {status} 
                </h2>
                <p className="price"> ${price} </p>
                
                <div className="Post-image"> 
                  <div className="Post-image-bg">
                    <img src={image} alt="Product Image" class="responsive"/>
                  </div>    
                </div>
                <div className="Post-caption">
                  <strong> {name}</strong>
                </div>
                <div className="Post-stars">
                  <StarRatings
                    rating={randomstars}
                    starRatedColor="blue"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                  />
                </div>
                <div className="Post-comment">
                <Form> 
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Leave a comment!</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                  </Form.Group>
                  <Button onClick={this.onComment}> Submit </Button>
                </Form>
                </div>
            </article>
          </div>
          
        );
    }
}