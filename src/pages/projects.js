import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/projects.scss';
import Project from "../components/project";

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
                    <div className="row h-100 mt-5 ">
                        <Project
                                color="#922E63"
                                link="/projects/tdf"
                                text="TDF, l'intranet communautaire"
                                alt="Voir la page de TDF"
                                filename="TDF_home.png"/>
                        <Project
                                color="#922E63"
                                link="/projects/ffyn"
                                text="FFYN, le pont entre l'investisseur et l'asset manager"
                                alt="Voir la page de Ffyn"
                                filename="ffyn.png"/>
                    </div>
                    <div className="row h-100 mt-5 ">
                        <Project
                                color="#2F7B27"
                                link="/projects/daradja"
                                text="Daradja, un outil de prise de rendez-vous"
                                alt="Voir la page de Daradja"
                                filename="projects/4-Daradja-fhd.png"/>
                        <Project
                                color="#922E63"
                                link="/projects/peneloppe"
                                text="La fabuleuse ballade de Pénéloppe, une visite immersive du Théâtre des Champs Elysées"
                                alt="Voir la page de Pénéloppe"
                                filename="projects/5-Peneloppe - fhd.png"/>
                    </div>
                </div>
            </section>
        </main>
    </Layout>
);

export default ProjectsPage