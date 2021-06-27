import React from 'react';
import "./About.css";
import about_1 from "./../../assets/about_1.jpg";
import about_2 from "./../../assets/about_2.png";
import about_3 from "./../../assets/about_3.png";

const About = () => {
    return (
        <div className="about-container">
            <div className="header">
                About Us
            </div>
            <div className="first-container">
        <img
                    src={about_1}
                    className='first-image'
                    alt=''
                />
        
        <p className='first-para'> Choosing a doctor for a loved one is one of the most important decisions you make. Empathi offers detailed profiles of doctors based on their qualifications, expertise & patient ratings so that you can discover right doctor & the right care for your family.</p>
            </div>
            <div className="second-container">
                <p className='second-para'> Empathi's mission is to empower you, as a patient or a caregiver, by providing trustworthy information & knowledge about your health care. We do not have any promotional or sponsorhsip programs for doctors to list on our platform. The patient ratings on Empathi are provided by millions of registered users like yourselves. So you can trust every single doctor ratings on Empathi. </p>
        <img
                    src={about_2}
                    className='second-image'
                    alt=''
                />
            </div>
            <div className="third-container">
        <img
                    src={about_3}
                    className='third-image'
                    alt=''
                />
                <p className='third-para'>Consulting with a doctor is not just a health issue but also an emotional & a private issue for many of us. At Empathi, we understand that. That is why, we have ratings for doctors across several parameters. Go ahead & choose.
</p>
                </div>
        
            
        </div>

    );
};

export default About;
