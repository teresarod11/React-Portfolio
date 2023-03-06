import React from 'react';
import Card from 'react-bootstrap/Card';

function About() {
  return (
    <Card className="bg-dark text-white" sticky="top" style={{ width: '100rem', height: '20rem' }}>
      <Card.Img src="holder.js/100px270" alt="Card image" />
      <Card.ImgOverlay>
      <Card.Body>
        <Card.Title>Teresa Rodriguez</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">About Me</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card.ImgOverlay>
    </Card>
  );
}

export default About;