import React from 'react';
import HomePage from "./../../assets/HomePage.jpg";
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
// import { DropdownButton } from 'react-bootstrap';
// import { Dropdown} from 'react-bootstrap';
import './Home.css';

class Home extends React.Component{
    render() {
        return (
            <div className="landing-container">
                <div className="landing-box">
                <img
                    src={HomePage}
                    className='landing-image'
                    alt=''
                />
                <div className="landing-header">
                Find the Right Doctor, Get the care you deserve!
                    </div>
                    
                </div>
            
                <div className="landing-para">
                <p> Choose doctors based on patient ratings. Search by what matters most to you. </p>
                </div>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <Button variant="danger">Find the Doctors</Button>
                        
                    </InputGroup.Prepend>
                    <FormControl placeholder ="Enter the Doctor Name" />
                    <FormControl placeholder =" Speciality" />
                    <FormControl placeholder="Condition" />
                    <FormControl placeholder="City" />
                    
                    </InputGroup>
                   
                    

                <Button href="/doctors"  variant="outline-danger" size="lg">
                    Enter
                </Button>
                

          

    
                    
               
            </div>
  
      
        );
    }
}
export default Home;