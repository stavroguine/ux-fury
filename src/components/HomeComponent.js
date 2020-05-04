import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';



class Home extends Component {

    render() {
        return (
            <main className="home">
                <section id="splashScreen" className="home__splash">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="sol-sm-12 my-auto ">
                                <div className="home__splash--content align-middle">
                                    <div className="home__splash--title">
                                        <h1>La fureur de l'UX</h1>
                                    </div>
                                    <div className="home__splash--social">
                                        <span>Mail</span>
                                        <span>Linkedin</span>
                                        <span>Instagram</span>
                                        <span>Youtube</span>
                                    </div>
                                    <button>Découvrir mon parcours</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            // <section id="topProjects" className="home-topProjects"></section>
            // <section id="topTools" className="home-topTools"></section>
        );
    }
}

export default Home;