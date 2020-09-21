import React from 'react';
import './LiveViewCards.css';
import { Card } from 'react-bootstrap';

const LiveViewCards = () => {
  return (
    <div className="view-cards container-fluid mt-3">
      <Card className="card">
        <Card.Body>
          <Card.Title className="card-title">50</Card.Title>
          <Card.Text className="card-bottom">Today's orders</Card.Text>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Body>
          <Card.Title className="card-title">99,20$</Card.Title>
          <Card.Text className="card-bottom">Today's earnings</Card.Text>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Body>
          <Card.Title className="card-title">50</Card.Title>
          <Card.Text className="card-bottom">Today's clients</Card.Text>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Body>
          <Card.Title className="card-title">50</Card.Title>
          <Card.Text className="card-bottom">Active orders</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LiveViewCards;
