import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="#AboutMe" smooth={true} duration={500}>
              About Me
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="#Portfolio" smooth={true} duration={500}>
              Portfolio
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="#ContactMe" smooth={true} duration={500}>
              Contact Me
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navbar;