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
          I am very passionate about web development, which I have experience with HTML, CSS, Javascript, React and more! I am always wanted to learn more to extend my knowlege in the IT field. 
        </Card.Text>
      </Card.Body>
      </Card.ImgOverlay>
    </Card>
  );
}

export default About;