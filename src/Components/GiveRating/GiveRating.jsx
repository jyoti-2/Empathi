import React from 'react';
import './GiveRating.css';
import {Form, Button} from 'react-bootstrap';

const GiveRating = props =>{
    return(
        <div className="Giverating-container">
            <div className="box">
            <div className="heading-rating">
                <h4>How was your experience with <b>Dr Pratik Sinha?</b></h4>
                <h6>Your review will help people to find suitable doctor for them.</h6>
            </div>
            
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>1. For which health problem/treatment did you visit?</Form.Label>
                    <Form.Control type="text" placeholder="For example- Back pain" className="text-container"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>2. Tell us about your experience with the doctor. 
                    </Form.Label>
                    <Form.Control as="textarea" placeholder = "Start typing here..."rows={5} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="email" placeholder="Your name" className="text-container"/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="email" placeholder="Email" className="text-container" />
                </Form.Group>
                    
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" sz = "lg" label="I want to keep my identity annonymus" />
                </Form.Group>
                
                <Button variant="danger" type="submit">
                    Submit
                </Button>
            
            </Form>

        </div>
        </div>
    );
};

export default GiveRating;
