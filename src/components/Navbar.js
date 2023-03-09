import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <>
      <Nav className="nav justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/" style={{ color: '#5A5A5A' }}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="AboutMe" style={{ color: '#5A5A5A' }} smooth={true} duration={500}>
              About Me
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="Portfolio" style={{ color: '#5A5A5A' }} smooth={true} duration={500}>
              Portfolio
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="ContactMe" style={{ color: '#5A5A5A' }} smooth={true} duration={500}>
              Contact Me
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navbar;
