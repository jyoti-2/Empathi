import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import HomePage from "./../../assets/HomePage.jpg";
import './Home.css';

class Home extends React.Component{
    render() {
        return (
        <div className="landing-container">
                <h1 className="landing-header"> Find the Right Doctor, Get the care you deserve!</h1>
                {/* <div className="typewriter-container">
                    <Typewriter
                        options={{
                            strings: ["Get", "the", "care", "you", "deserve"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div> */}

                <div className="head-btn">
                    <Link to="/doctors" className='first-btn'>
                        <p className="btn-text"> Enter a doctors name </p>
                    </Link>
                    <Link to="/doctors" className= "second-btn">
                        <p className="btn-text"> Enter a postcode </p>
                    </Link>
                    <Link to="/doctors" className="third-btn">
                        <p className="btn-text"> Speciality </p>
                    </Link>
                    <Link to="/doctors" className="fourth-btn">
                        <p className="btn-text"> Find A Doctor </p>
                    </Link>
                    
                </div>
                <img
                    src={HomePage}
                    className='landing-image'
                    alt=''
                />
           
            </div>
      
        );
    }
}
export default Home;