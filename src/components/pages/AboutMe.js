import React from 'react';
import Card from 'react-bootstrap/Card';
import bio from '../images/bg.jpg';

function About() {
  return (
    <Card className="bg-dark text-white" sticky="top" style={{ width: '100%', height: '20rem' }}>
      <Card.Img className="bio-image" src={bio} alt="bio" style={{ width: "100%", height: "100%"}} />
      <Card.ImgOverlay>
      <Card.Body>
        <Card.Title>Teresa Rodriguez</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">About Me</Card.Subtitle>
        <Card.Text className='bio d-flex justify-content-center'>
        Hello! My name is Teresa Rodriguez. I am a recent graduate of the Full-Stack Coding Bootcamp Program at Georgia Tech. I am very passionate about front-end web development. I am skilled in HTML and CSS to create prototypes, but I am also proficient in JavaScript, jQuery, Bootstrap, etc. 
        </Card.Text>
      </Card.Body>
      </Card.ImgOverlay>
    </Card>
  );
}

export default About;