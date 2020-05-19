import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Background from "../components/background"
import SEO from "../components/seo"
import '../styles/career.scss';
import photo from "../images/career/2-Photo.png"
import plant_one from '../images/career/3-Plant_one.png';
import plant_two from '../images/career/4-Plant_two.png';
import plant_leaf from '../images/career/5-Plant_leaf.png';
import plant_bulbs from '../images/career/6-Plant_bulbs.png';
import plant_flowers from '../images/career/7-Plant_flowers.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const CareerPage = () => (
    <Layout>
        <SEO title="Career" />
        <main className="career" >
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
            <section id="carrerBio" className="career__bio ">
                <Background>
                    <div className="col-sm-12 col-md-6  ">
                        <div className="career__bio--face">
                            <img src={photo} className="img-fluid content"  />
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
                </Background>

            </section>
            <section id="journey" className="career__journey">
                <div className="container" >
                    <div className="row">
                        <div className="col-sm-12 col-md-12"     >
                            <h2>Mais comment en suis-je arrivée là ?</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 ">
                            <div className="career__journey--step align-items-center  "  >
                                <img src={plant_one}
                                     data-aos="fade-up"
                                     data-aos-easing="linear"
                                     data-aos-duration="3000"/>
                                <h3>Acte 1</h3>
                                <h4> Le cinéma</h4>
                                <span> Le cinéma... Ce 7ème art, nouveaux, toujours à la pointe de la perfection.</span>
                                <p>

                                    J'ai eu la chance de pouvoir comprendre comment on réalisait un film : les story-boards, les scénarii...
                                    Et j'ai pu faire mes premiers pas dans le montage.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 ">
                            <div className="career__journey--step "   >
                                <img src={plant_two}
                                     data-aos="fade-up"
                                     data-aos-easing="linear"
                                     data-aos-duration="3000" />
                                <h3>Acte II</h3>
                                <h4> Les sciences "molles"</h4>
                                   <span>Quoi de mieux que les sciences molles pour comprendre notre évolution ?</span>
                                <p>
                                    Grâce à ces sciences, j'ai acquis la méthodologie d'enquête, qui est très bien pour
                                    mener des tests utilisateurs, mais aussi pour analyser les données utilisateurs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 ">
                            <div className="career__journey--step">
                                <img src={plant_leaf}
                                     data-aos="fade-up"
                                     data-aos-easing="linear"
                                     data-aos-duration="3000" />
                                <h3>Acte III</h3>
                                <h4> La folie du monde numérique</h4>
                                    <span>Le numérique signifie pour moi l'innovation. </span>
                                <p>
                                    Dans le web, nos habitudes ont évolué en
                                    peu du temps. Grâce à de nouvelles fonctionnalités, de nouvelles applications.
                                    Inventer, innover, améliorer, ce sont les raisons pour lesquelles je voulais me
                                    spécialiser dans le web.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 ">
                            <div className="career__journey--step">
                                <img src={plant_bulbs}
                                     data-aos="fade-up"
                                     data-aos-easing="linear"
                                     data-aos-duration="3000" />
                                <h3>Acte IV</h3>
                                <h4> L'euphorie derrière un produit</h4>
                                <span>Le monde du numérique m'a appris une chose :  un produit n'est jamais fini.</span>
                                <p>
                                    Grâce à mes stages, j'ai pu voir toute la gestion de projet : l'innovation,
                                    les analyses data, les bugs et l'écriture des tickets.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div  className="row" >
                        <div className="col-sm-12 col-md-12 ">
                            <div className="career__journey--step">
                                <img src={plant_flowers}
                                     data-aos="fade-up"
                                     data-aos-easing="linear"
                                     data-aos-duration="3000" />
                                <h3>Acte V</h3>
                                <h4>Eureka !</h4>
                                <span>
                                    Ma problématique était de trouver un métier qui me permettait d'utiliser
                                    toutes ces connaissances, dans le web, et d'inclure de la création en plus.
                                </span>
                                <p>
                                    C'est comme ça que j'ai croisé la voie de l'UX Design. Ce métier inclut tout ce que j'ai pu voir.
                                    J'ai donc pris les devants pour avoir toutes les chances de mon côté.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="careerRecap" className="career__recap">
                    <Background>
                        <div className="col-sm-12 col-md-12">
                            <div className="career__recap--speech ">
                                <h2>Où je veux aller</h2>
                                <p>
                                    Dans ce métier, j’en apprends tous les jours. Chaque jour, je progresse,
                                    j’apprends, je mets en pratique. Côté UX, j’ai pu montrer mes preuves,
                                    côté UI, je me perfectionne. Ce que je recherche est une mission qui allie
                                    parfaitement l’expérience utilisateurs et la recherche utilisateurs : définir
                                    des KPI, construire des fonctionnalités, mener des tests utilisateurs,
                                    construire et mener des enquêtes qualitatives et quantitatives, améliorer
                                    une plateforme, telles sont les voies dans lesquelles je me sentirai
                                    complète.
                                </p>
                            </div>
                        </div>
                    </Background>
            </section>
        </main>
    </Layout>

);

export default CareerPage
