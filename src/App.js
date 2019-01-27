import React, {Component} from 'react';
import logo from './assets/images/down.jpg';
import './App.scss';
import DownLogo from "./components/shared/down-logo/down-logo";
import Header from "./components/header/header";
import SideNav from "./components/side-nav/side-nav";
import Content from "./components/content/content";
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
    return (
        <React.Fragment>
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <Header/>
                    <Router>
                        <SideNav/>
                    </Router>
                    <Content/>
                </div>
            </div>
            <DownLogo logo={logo}/>
        </React.Fragment>
    );
}

export default App;
