import React from 'react';
// import logo from "./../../assets/logo.png";
import './NavBar.css';
import { Navbar,Nav, Button } from 'react-bootstrap';
import {Link} from "react-scroll";



class NavBar extends React.Component{

    constructor(props) {
          super(props);
             
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
     
        handleChange(event) {
        this.setState({value: event.target.value});
        }
     
        handleSubmit(event) {
          event.preventDefault();
      }
     
    render() {
        return (
            <div className="nav-container">

                <Navbar fixed="top" bg="white" expand="sm" className="navbar-container" >
                    <div className="nav-left">
                        {/*Logo*/}
                        IdeaStart
                    </div>

                    <div className="nav-center">
                        <input
                            type='text'
                            placeholder='Search by doctor name'
                            className='search-box-nav'
                            autoComplete='off'
                        />

                        <div className="search-box-second-nav">
                        <form onSubmit={this.handleSubmit} >
                            <select onChange={this.handleChange} >
                                <option default>Search by city</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Patna">Patna</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                            </select>
                            </form>
                            </div>
                    </div>


                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bar' />
                    <Navbar.Collapse id="rsponsive-navbar-nav">
                               
                        <Link activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={1000}>
                        </Link>

                        <Link activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={1000}>
                            <a> About us </a>
                        </Link>
                   
                        <Link activeClass="active"
                            to="doctors"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={1000}>
                        </Link>

                        {/* <Link activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={1000}>
            
                        </Link> */}
                   
            
                        <Nav.Link href="/login">Login/Signup</Nav.Link>
         
         
                        {/* <Nav.Item>
                            
                <Nav.Link href="/login">Login/Signup</Nav.Link>
            </Nav.Item>
                    
            <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
                        </Nav.Item> */}
                       
                    </Navbar.Collapse>
           
                </Navbar>
              
           
            
            </div>
            
        );
    };
};

export default NavBar;

