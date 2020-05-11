import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/projects.scss';


const ProjectsPage = () => (
    <Layout>
        <SEO title="Projects" />
        <main className="projects">
            <section id="projectsSplash" className="projects__splash">

            </section>
            <section id="projectsOverview" className="projects__overview">

            </section>
        </main>
    </Layout>
);

export default ProjectsPage
