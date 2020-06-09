import React from "react"
import Layout from "../components/layout"
import Recap from "../components/recap"
import SEO from "../components/seo"
import '../styles/career.scss';
import photo from "../images/career/2-Photo.png"
import leaf from "../images/leaf.svg";
import groupe_404 from "../images/Groupe_404.png";
import plant_one from '../images/career/3-Plant_one.png';
import plant_two from '../images/career/4-Plant_two.png';
import plant_leaf from '../images/career/5-Plant_leaf.png';
import plant_bulbs from '../images/career/6-Plant_bulbs.png';
import plant_flowers from '../images/career/7-Plant_flowers.png';
import blue from "../images/Leaf blue shadow.png";


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
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-sm-12 col-md-6 my-auto  ">
                            <div className="career__bio--face">
                                <img src={photo} className="img-fluid content"  />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 pl-5 my-auto">
                            <div className="career__bio--speech">
                                <h2>Qui suis-je ?</h2>
                                <span>Gaëlle</span>
                                <p>
                                    Du cinéma, de la télévision, un brin de retro-gaming : ce sont dans ces univers que 
                                    j'ai grandi.
                                    Mes univers de formation sont aussi divers : la sociologie m'a donné le goût de la statistique
                                    et des entretiens, mes études dans le web, le goût de la gestion de projet et de l'innovation.
                                    Mon but en tant qu'UX Designeuse est simple : concevoir des parcours utilisateurs simples et des fonctionnalités innovantes.
                                                                        
                                </p>
                               
                             </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="journey" className="career__journey">
                <img src={groupe_404} className="float-right"  />
                <img src={leaf} className="leaf leaf__right" />
                <img src={leaf} className="leaf leaf__right" />
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
                                <h3>Acte I</h3>
                                <h4> Le cinéma</h4>
                                <span> Le cinéma : ce 7ème art, nouveau, toujours à la pointe de la perfection.</span>
                                <p>
                                    J'ai eu la chance de pouvoir comprendre comment on réalisait un film : les story-boards, les scénarii.
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
                                    mener des tests utilisateurs ainsi qu'analyser les données utilisateurs.
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
                                    peu de temps. Grâce aux nouvelles fonctionnalités, aux nouvelles applications.
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
                                    Ma problématique était de trouver un métier qui me permettrait d'utiliser
                                    toutes ces connaissances, dans le web, et d'inclure de la création en plus.
                                </span>
                                <p>
                                    C'est comme ça que j'ai croisé la voie de l'UX Design. Ce métier inclut tout ce que j'ai pu voir.
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="careerRecap" className="career__recap">
                    <Recap>
                        <div className="col-sm-12 col-md-12">
                            <div className="career__recap--speech ">
                                <h2>Quelles sont les missions qui m'intéresseraient ?</h2>
                                <p>
                                    Comme vous avez pu le lire plus haut, les missions qui m'intéresseraient 
                                    sont des missions qui incluent de l'analyse de données, des enquêtes sur les utilisateurs, de la création et 
                                    de l'innovation.
                                    Je peux aussi faire de la refonte de site, voir créer un concept et un site à partir d'une page blanche.
                                </p>
                            </div>
                        </div>
                        <img src={blue} className="leaf leaf__right" />
                    </Recap>
            </section>
        </main>
    </Layout>
);

export default CareerPage
