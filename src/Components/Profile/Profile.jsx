import React from 'react';
import './Profile.css';
import {Link} from "react-scroll";
import Ratings from '../Ratings/Ratings';
import Stories from '../Stories/Stories';


const Profile = () => {
    return (
        <div id = "profile" className ="profile-container">
            <div className="top-bar">
                <h3 className= 'item'> Profile</h3>
                <h3 className= 'item'> User ratings</h3>
                <h3 className= 'item' > Patient stories</h3>
                <h3 className= 'item'> Consulted for symptoms</h3>
            </div>

            <Link activeClass="active"
                            to="profile"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={1000}>
            </Link>
            <Link activeClass="active"
                            to="ratings"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={1000}>
            </Link>
            <Link activeClass="active"
                            to="stories"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={1000}>
            </Link>
            <Link activeClass="active"
                            to="symptoms"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={1000}>
            </Link>
            














            
            <Ratings/>
            <Stories/>
            
        </div>
        
    );
};

export default Profile;
