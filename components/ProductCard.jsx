// src/components/ProductCard.jsx

import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ title, description, imageUrl }) => {
  return (
    <Card style={{ width: '18rem' }} className="mb-3">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
