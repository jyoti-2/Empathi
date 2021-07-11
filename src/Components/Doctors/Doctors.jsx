import React from 'react';
import "./Doctors.css";
import doc from "./../../assets/doc.jpg";
import {Button} from 'react-bootstrap';

const Doctors = () => {
    return (
        <div id = "doctors" className="doctor-container" >
            {/* <h1 className="header" data-aos="fade-down"> Consult Top Doctors. </h1> */}


            <div className="first-container-doc">
                <div className="doc-profile">
                    <div className="left-container">
                        <img
                            src={doc}
                            alt=''
                            className='doc-img'
                        />
                        {/* <span class="material-icons"> thumb_up_off_alt thumb_down_off_alt </span> */}
                    </div>
                    
                    <div className="right-container">
                        <h3> Dr Amola Kumari, M.D</h3><br/>
                        <h5>Orthopaedic surgeon | 12 Yrs Exp.</h5>
                        <h5> <b>Practice Area:</b>Ankle sprain, Foot pain</h5>
                        <h5> <span class="material-icons"> location_on </span> Old Palasia, Indore | Paras Hospital</h5>
                        <h5> <span class="material-icons">phone </span> +91 9234123457</h5>
                        </div>
                    </div>
                

                    <div className="button-container">
                    <Button href= './#/profile'  variant="danger" size="sm" className="submit-button-doc">
                        <div className="submit-text">
                        In-person appointment
                        </div>  
                    </Button>

                    <Button href= './#/profile'  variant="danger" size="sm" className="submit-button-doc">
                        <div className="submit-text">
                        Online consultation
                        </div>  
                    </Button>
            </div>
            </div>
            

            <div className="first-container-doc">
                <div className="doc-profile">
                    <div className="left-container">
                        <img
                            src={doc}
                            alt=''
                            className='doc-img'
                        />
                        {/* <span class="material-icons"> thumb_up_off_alt thumb_down_off_alt </span> */}
                    </div>
                    
                    <div className="right-container">
                        <h3> Dr Amola Kumari, M.D</h3><br/>
                        <h5>Orthopaedic surgeon | 12 Yrs Exp.</h5>
                        <h5> <b>Practice Area:</b>Ankle sprain, Foot pain</h5>
                        <h5> <span class="material-icons"> location_on </span> Old Palasia, Indore | Paras Hospital</h5>
                        <h5> <span class="material-icons">phone </span> +91 9234123457</h5>
                        </div>
                    </div>
                

                    <div className="button-container">
                    <Button href='./#/profile'  variant="danger" size="sm" className="submit-button-doc">
                        <div className="submit-text">
                        In-person appointment
                        </div>  
                    </Button>

                    <Button href='./#/profile'  variant="danger" size="sm" className="submit-button-doc">
                        <div className="submit-text">
                        Online consultation
                        </div>  
                    </Button>
                </div>
                </div>
            
        </div>
        

        
        
        
    );
};

export default Doctors;
