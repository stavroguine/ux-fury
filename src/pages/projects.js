import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/projects.scss';
import BlackOpacity from "../components/black-opacity";
import TDF_home from "../images/TDF_home.png";
import ffyn from "../images/ffyn.png";
import penelope from "../images/projects/5-Peneloppe - fhd.png";
import daradja from "../images/projects/4-Daradja-fhd.png";


const ProjectsPage = () => (
    <Layout>
        <SEO title="Projects" />
        <main className="projects">
            <section id="projectsSplash" className="projects__splash">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-sm-12 my-auto ">
                            <div className="career__splash--content align-middle">
                                <div className="career__splash--title">
                                    <h1>Mes projets</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="projectsOverview" className="projects__overview">
                <div className="container">

                    <div className="row h-100 mt-5">
                        <div className="col-sm-12 col-md-6">
                            <Link to='/projects/tdf'>
                                <div className="projects__overview--item">
                                    <img src={TDF_home} className="img-fluid" />
                                    <BlackOpacity/>
                                    <span >TDF, l'intranet communautaire</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="projects__overview--item">
                                <img src={ffyn} className="img-fluid" />
                                <BlackOpacity/>
                                <span >FFYN, le pont entre l'investisseur et l'asset manager</span>
                            </div>
                        </div>
                    </div>
                    <div className="row h-100 mt-5">
                        <div className="col-sm-12 col-md-6">
                            <div className="projects__overview--item">
                                <img src={daradja} className="img-fluid" />
                                <BlackOpacity/>
                                <span >Daradja, un outil de prise de rendez-vous</span>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="projects__overview--item">
                                <img src={penelope} className="img-fluid" />
                                <BlackOpacity/>
                                <span >La fabuleuse ballade de Pénélope, une visite immersive du Théâtre des Champs Elysées</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </Layout>
);

export default ProjectsPage
