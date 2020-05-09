import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/career.scss';
import photo from '../images/career/2-Photo.png';

const CareerPage = () => (
    <Layout>
        <SEO title="Career" />
        <main className="career">
            <section id="careerSplash" className="career__splash">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="sol-sm-12 my-auto ">
                            <div className="career__splash--content align-middle">
                                <div className="career__splash--title">
                                    <h1>Mon parcours</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="bio" className="career__bio">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-sm-12 col-md-6 ">
                            <div className="career__bio--face ">
                                <img src={photo} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 pl-5">
                            <div className="career__bio--speech">
                                <h2>Qui suis-je ?</h2>
                                <span>Gaëlle</span>
                                <p>
                                    Cinéma, mode, vidéos, publicité, monde de la télévision et
                                    même jeux vidéo: c’est tout ce qui me définit. Mais je cache autre chose sous mon chapeau : de la sociologie, de
                                    l’anthropologie, une passion inégalée pour l’Histoire, pour
                                    les mythes (surtout grecques) ainsi que l’analyse de donnée
                                    et les statistiques. J’aime comprendre pourquoi mais surtout comment on en arrive à une situation donnée.
                                </p>
                                <p>
                                    C’est pourquoi je me suis lancée dans la voie de l’UX
                                    design et de la compréhension de l’utilisateur. Lui définir un joli environnement, une expérience facile à prendre en main, lui permettre de lui simplifier la vie, tels sont mes
                                    mojos!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="journey" className="career__journey">

            </section>
            <section id="recap" className="career__recap">

            </section>
        </main>
    </Layout>
)

export default CareerPage
