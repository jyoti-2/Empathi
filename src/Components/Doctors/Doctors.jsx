import React from 'react';
import "./Doctors.css";
import doc from "./../../assets/doc.jpg";


const Doctors = () => {
    return (
        <div id = "doctors" className="doctor-container" >
            <h1 className="header"> Find the right doctor. </h1>
            <div className="first-container">
                <div className="left-container">
                    <img
                        src={doc}
                        alt=''
                        className='doc-img'
                    />
                    <span class="material-icons"> thumb_up_off_alt thumb_down_off_alt </span>
                </div>
                <div className="right-container">
                    <h3> Dr Amola Kumari, M.D</h3><br/>
                    <h5>Orthopaedic surgeon</h5>
                    <h5>Practice Area: Ankle sprain, Foot pain</h5>
                    <h5> <span class="material-icons"> location_on </span> Old Palasia, Indore | Paras Hospital</h5>
                    <h5> <span class="material-icons">phone </span> +91 9234123457</h5>
                </div>
        </div>
        <div className="first-container">
                <div className="left-container">
                    <img
                        src={doc}
                        alt=''
                        className='doc-img'
                    />
                    <span class="material-icons"> thumb_up_off_alt thumb_down_off_alt </span>
                </div>
                <div className="right-container">
                    <h3> Dr Amola Kumari, M.D</h3><br/>
                    <h5>Orthopaedic surgeon</h5>
                    <h5>Practice Area: Ankle sprain, Foot pain</h5>
                    <h5> <span class="material-icons"> location_on </span> Old Palasia, Indore | Paras Hospital</h5>
                    <h5> <span class="material-icons">phone </span> +91 9234123457</h5>
                </div>
        </div>

            
        </div>
        
    );
};

export default Doctors;
