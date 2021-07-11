import React from 'react';
import {HashRouter, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Profile from '../Profile/Profile';
import Doctors from '../Doctors/Doctors';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
    render() {
        return (
            <div>
                <HashRouter basename= {process.env.PUBLIC_URL}>
                    <div>
                        
                        <Route path='/home' exact component={Home}/>
                        <Route path='/about' exact component={About} />
                        <Route path ='/login' exact component={Login}/>
                        <Route path='/profile' exact component={Profile} />
                        <Route path='/doctors' exact component={Doctors} />
                        <Route path='/signup' exact component={Signup}/>
                    </div>
                </HashRouter>
            </div>
        );
    };
};
export default App;