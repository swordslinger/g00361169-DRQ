import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from 'react-router-dom';

export class MenuItem extends React.Component {

constructor() {
    super();
    this.DeleteMenuItem = this.DeleteMenuItem.bind(this);
}

DeleteMenuItem(c) {
    c.preventDefault();
    axios.delete('http://localhost:4000//api/menu/'+this.props.menu._id)
    .then(()=>{
        this.props.ReloadData();
    })
    .catch((err)=>{
        console.log(err);
    });
}

render() {
    return (
        <div>
            <h3>{this.props.menu.FoodName}</h3>
            <p>{this.props.menu.Price}</p>
            <img src={this.props.menu.FoodPicture} width = "100" height="100"></img>
            <Card>
                <Card.Header>{this.props.menu.FoodName}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={this.props.menu.FoodPicture} width="100" height="100"></img>
                        <footer className="blockquote-footer">
                            {this.props.menu.Price}
                        </footer>
                    </blockquote>
                    <Button variant="danger" onClick={this.DeleteMenuItem}>Delete</Button>
                    <Link to={'/change/'+this.props.menu._id} 
                    className="btn btn-primary">Change</Link>
                </Card.Body>
               
            </Card>
        </div>
    );
}
}