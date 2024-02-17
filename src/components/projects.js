import React from 'react';
import Card from 'react-bootstrap/esm/Card';

export default function Project(props) {
    return (
    <Card className='card'>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <Card.Link href={props.deployed}>Deployment</Card.Link>
            <Card.Link href={props.repo}>Repository</Card.Link>
        </Card.Body>
    </Card>
    );
}