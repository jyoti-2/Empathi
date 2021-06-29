import React from 'react';
// import logo from "./../../assets/logo.png";
import './NavBar.css';
import {Navbar, Nav , Button} from 'react-bootstrap';
//import {Link} from 'react-scroll';


const NavBar = () => {
    return (
        <div className="nav-container">

            <Navbar fixed="top" bg="white" expand="sm" className="navbar-container" >
                <div className= "nav-left">
                {/*Logo*/}    
                IdeaStart
                </div>
                <div className="nav-center">
                <input
                    type='text'
                    placeholder='Search by doctor name'
                    className='search-box'
                    autoComplete='off'
                    />
                    <Button href="/doctors"  variant="danger" size="lg" className="submit-button">
                    <div className="submit-textbar">
                    Get Started
                    </div>  
                </Button> 
                </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bar'/>
            <Navbar.Collapse id="rsponsive-navbar-nav">

            <div className="nav-right">
            <Nav.Item>
                <Nav.Link href="/login">Login/Signup</Nav.Link>
            </Nav.Item>
                    
            <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
                        </Nav.Item>
                        </div>
                    </Navbar.Collapse>
           
                </Navbar>
              
           
            
        </div>
            
    );
};

export default NavBar;

