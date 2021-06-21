import React from 'react';
// import logo from "./../../assets/logo.png";
import './NavBar.css';
import {Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-scroll';


const NavBar = () => {
    return (
        <div className="nav-container">
        
            <Navbar fixed="top" bg="white" expand="lg" className="navbar-container" >
                <div className= "nav-left">
                {/*Logo*/}    
                IdeaStart
                </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="rsponsive-navbar-nav">
      
            <Nav className="ml-auto">        
                        <Link
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            duration={1000}
                            to="/">
                <a className= "nav-link" href='/'> Home </a>
                        </Link>
                        <Link
                            activeClass="active"
                            smooth={true}
                            offset={-90}
                            duration={1000}
                            to="/about">
                <a className= "nav-link" href ='/about'>About</a>
                        </Link>
                        <Link
                            activeClass="active"
                            smooth={true}
                            offset={-90}
                            duration={1000}
                            to="/services">
                <a className= "nav-link" href='/services'>Services</a>
            </Link>
                        <Link
                            activeClass="active"
                            smooth={true}
                            offset={-90}
                            duration={1000}
                            to="/doctors">
                <a className= "nav-link" href='./doctors'>Doctors</a>
            </Link>
                        
            </Nav>
                        
            
            </Navbar.Collapse>
            </Navbar>
            
        </div>
            
    );
};

export default NavBar;

