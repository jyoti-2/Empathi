import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Login from '../Login/Login';
import Services from '../Services/Services';
import Doctors from '../Doctors/Doctors';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar/NavBar';


class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <NavBar/>
                        <Route path='/' exact component={Home}/>
                        <Route path='/about' exact component={About} />
                        <Route path ='/login' exact component={Login}/>
                        <Route path='/services' exact component={Services} />
                        <Route path='/doctors' exact component={Doctors} /> 
                    </div>
                </BrowserRouter>
            </div>
        );
    };
};
export default App;