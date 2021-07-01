import React from 'react';
import about_2 from "./../../assets/about_2.png";
import "./Doctors.css";

const Doctors = () => {
    return (
        <div id = "doctors" className="doctor-container" >
            <h1> Find the right doctor. </h1>
            <img
                src={about_2}
                alt=''
                />
        </div>
        
    );
};

export default Doctors;
