import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from "./HomeComponent";
import { Navbar, NavbarBrand } from 'reactstrap';



class Main extends Component {

    render() {
        return (
            <div className="main-container">
            <Header />
                <Home />
            <Footer />
            </div>
        );
    }
}

export default Main;