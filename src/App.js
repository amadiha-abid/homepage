// App.js
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import backgroundImage from './assets/Rectangle 9.png';
// comment
function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="custom-navbar">
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#" className="item">Home</Nav.Link>
            <Nav.Link href="#" className="item">About</Nav.Link>
            <Nav.Link href="#" className="item">Services</Nav.Link>
            <Nav.Link href="#" className="item">Contact</Nav.Link>
            
            <div className="navbar-brand-container">
              <Navbar.Brand href="#" >
                <p className='text-white ms-5  logo'>logo here</p>
              </Navbar.Brand>
              <span className="icon-group">
                <FontAwesomeIcon icon={faTwitter} className="icon" />
                <FontAwesomeIcon icon={faFacebook} className="icon" />
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
              </span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="text-container">
        <p className="big-text bold-text">
          The best products<br />
          start with Figma
        </p>

        <p className="small-text">
          Most calendars are designed for teams. Slate is designed <br /> for freelancers
        </p>

        <button className="try-for-free-button">Try for Free</button>
      </div>

      <div className="text-features-container">
        <p className='title-features'>
          Features
        </p>

        <p className="text-features">
        Most calendars are designed for teams. <br />
        Slate is designed for freelancers
        </p>

        
      </div>

      <div
        className="background-image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
    </div>
  );
}

export default App;
