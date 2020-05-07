import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                                        <img src="/assets/quote.svg"/>
                                            <h1>La fureur de l'UX</h1>
                                        <img src="/assets/quote.svg"/>
                                    </div>
                                    <div className="home__splash--social">
                                        <ul>
                                            <li>Mail</li>
                                            <li>Linkedin</li>
                                            <li>Instagram</li>
                                            <li>Youtube</li>
                                        </ul>
                                    </div>
                                    <button className="button"><Link to='/career'>Découvrir mon parcours</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="topProjects" className="home__topProjects">
                    <div className="container">
                        <div className="row h-100">
                            <div className="sol-sm-12">
                                <div className="home__topProjects--title">
                                    <h2>Mes projets phares</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row h-100">
                            <div className="col-sm-12 col-md-6">
                                <div className="home__topProjects--tdf">
                                    <img src="/assets/TDF_home.png" className="img-fluid" />
                                    <div className="black-opacity"></div>
                                    <span >TDF, l'intranet communautaire</span>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="home__topProjects--ffyn">
                                    <img src="/assets/ffyn.png" className="img-fluid" />
                                    <div className="black-opacity"></div>
                                    <span >FFYN, le pont entre l'investisseur et l'asset manager</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <button className="button mx-auto">Voir tous mes projets</button>
                        </div>
                    </div>
                </section>
                <section id="topTools" className="home__topTools">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="sol-sm-12">
                                <div className="home__topTools--title">
                                    <h2>Mes outils de prédilection</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row h-100">
                            <div className="sol-sm-0 col-md-2 pl-0">
                            </div>
                            <div className="sol-sm-12 col-md-3 pl-0">
                                <h3>UX</h3>
                                <ul>
                                    <li>Axure</li>
                                    <li>Papier & crayon</li>
                                    <li>Wireframe.cc</li>
                                    <li>Adobe XD</li>
                                    <li>Sketch</li>
                                </ul>
                            </div>
                            <div className="sol-sm-12 col-md-3 pl-0">
                                <h3>UI</h3>
                                <ul>
                                    <li>Adobe Photoshop</li>
                                    <li>Adobe InDesign</li>
                                </ul>
                            </div>
                            <div className="sol-sm-12 col-md-3 pl-0">
                                <h3>Loisirs</h3>
                                <ul>
                                    <li>Adobe Premiere</li>
                                    <li>Da Vinci Resolve</li>
                                    <li>Blender</li>
                                    <li>Mixxx</li>
                                    <li>FL Studio</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Home;