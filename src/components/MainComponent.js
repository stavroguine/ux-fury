import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

    render() {
        return (
            <div className="main-container">
            <Header />
            <Footer />
            </div>
        );
    }
}

export default Main;