import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/projects.scss';
import BlackOpacity from "../components/black-opacity";
import Image from "../components/image";

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
                                    <BlackOpacity/>
                                    <Image alt="Voir la page de TDF" filename="TDF_home.png" />
                                    <span >TDF, l'intranet communautaire</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <Link to='/projects/ffyn'>
                                <div className="projects__overview--item">
                                    <BlackOpacity/>
                                    <Image alt="Voir la page de Ffyn" filename="ffyn.png" />
                                    <span >FFYN, le pont entre l'investisseur et l'asset manager</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row h-100 mt-5">
                        <div className="col-sm-12 col-md-6">
                            <Link to='/projects/daradja'>
                            <div className="projects__overview--item">
                                <BlackOpacity/>
                                <Image alt="Voir la page de Ffyn" filename="projects/4-Daradja-fhd.png" />
                                <span >Daradja, un outil de prise de rendez-vous</span>
                            </div>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <Link to='/projects/penelope'>
                            <div className="projects__overview--item">
                                <BlackOpacity/>
                                <Image alt="Voir la page de Pénéloppe" filename="projects/5-Peneloppe - fhd.png" />
                                <span >La fabuleuse ballade de Pénéloppe, une visite immersive du Théâtre des Champs Elysées</span>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </Layout>
);

export default ProjectsPage
