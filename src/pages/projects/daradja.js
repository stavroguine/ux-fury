import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import '../../styles/projects/daradja.scss';
import Tag from "../../components/tag";
import Recap from "../../components/recap";
import Image from "../../components/image";
import OtherProject from "../../components/otherProject";
import Context from "../../components/context";


const DaradjaPage = () => (
    <Layout>
        <SEO title="Daradja" />
        <main className="daradja">
            <section id="daradjaSplash" className="daradja__splash">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-sm-12 col-md-12 my-auto ">
                            <div className="daradja__splash--content align-middle">
                                <div className="daradja__splash--title ">
                                    <h1>Daradja</h1>
                                </div>
                                <Tag>Web</Tag>
                                <Tag>1 mois</Tag>
                                <Tag>Les mentors</Tag>
                                <Tag>UX/UI Designer</Tag>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="daradjaIntro" className="daradja__intro">
                <Context
                    presentation="Daradja est une association mettant en contact des mentors, des salariés, et des étudiants étrangers. Le but est de permettre à ces derniers de donner plus de clefs pour mieux s’insérer professionellement après leurs études universitaires."
                    problem="Les mentors et les étudiants se rencontrent trois fois dans l’année. Sauf que la prise de rendez- vous des prochains devaient passer par les salariés de l’association. Ainsi que les commentaires des rendez-vous que le mentor devait faire. Cela rajoutait une charge de travail supplémentaires aux salariés de l’association, puisque certains mentors ne trouvaient pas le temps de faire correctement cette tâche par téléphone. Il fallait penser deux outils distincts: un pour les mentors - qu’ils puissent réserver un nouveau rendez-vous et faire leur commentaire - et un outil web pour les salariés de l’association afin de faire un meilleur suivi des tutorats."
                    resolution="Nous avons donc pensé ensemble à un outil pour l’association et un outil pratique pour les mentors."
                />
            </section>
            <section id="daradjaMap" className="daradja__map">
            </section>
            <section id="daradjaSteps" className="daradja__steps">
                <div className="container">
                    <div className="row h-100">
                        <div className="col-sm-12  pl-0">
                            <div className="daradja__steps--title">
                                <h2>Les étapes du projet</h2>
                            </div>
                        </div>
                    </div>
                    <div className="daradja__steps--item">
                        <div className="row h-100">
                            <div className="col-sm-12 pl-0">
                                <h3>La phase de recherche</h3>
                            </div>
                        </div>
                        <div className="row h-100">
                            <div className="col-sm-12 col-md-8  pl-0 my-auto">
                                <p>
                                    Nous sommes d’abord passés par une phase de compréhension du
                                    besoin de notre client. Nous avons d’abord défini le système du
                                    mentorat. Puis nous avons constitué une expérience map des deux
                                    publics visés : les mentors et les membre du personnel de l’association.
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-4 pl-5">
                                <Image alt="Brainstorming" filename="2-Daradja - brainstorming - FHD.png"  />
                            </div>
                        </div>
                    </div>
                    <div className="daradja__steps--item">
                        <div className="row h-100">
                            <div className="col-sm-12 pl-0">
                                <h3>La phase d'idéation</h3>
                            </div>
                        </div>
                        <div className="row h-100">
                            <div className="col-sm-12 col-md-4">
                                <Image alt="Schema mentors" filename="3-Daradja - Schéma BPMN MENTORS - FHD.png"  />
                            </div>
                            <div className="col-sm-12 col-md-8 pl-5">
                                <p>
                                    Pour mieux comprendre le déroulement du mentorat dans l’association,
                                    nous avons fait un brainstorming sur les mentors, pour avoir le plus
                                    d’idées sur ce sujet. Puis, nous avons schématisé le déroulé du suivi de
                                    mentorat actuel, pour pouvoir mieux repérer les points où nous pouvons
                                    amener une amélioration.
                                </p>
                                <p>
                                    En ce qui concerne le suivi du mentorat par les salariés de l’association,
                                    nous nous sommes intéressés à l’analyse de données et le traitement
                                    d’une base de données, pour concevoir un outil qui leur permettrait
                                    d’avoir une plus value par rapport à leur système actuel.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="daradja__steps--item">
                        <div className="row h-100">
                            <div className="col-sm-12 pl-0">
                                <h2>Wireflow de notre application mobile pour les mentors</h2>
                            </div>
                            <div className="col-sm-12 pl-0 mt-5">
                                <Image alt="Daradja wireflow" filename="4-DARADJA - WireFlow - FHD.png"  />
                            </div>
                        </div>
                    </div>
                    <div className="daradja__steps--item">
                        <div className="row h-100">
                            <div className="col-sm-12 pl-0">
                                <h3>La phase de production</h3>
                            </div>
                        </div>
                        <div className="row h-100">
                            <div className="col-sm-12 col-md-4 pl-0">
                                <p>
                                    Une fois que nous avons toutes les informations
                                    en main, nous avons défini un parcours
                                    utilisateur, pour les mentors. Ce parcours
                                    utilisateur était d’abord de commenter le
                                    rendez-vous avec son étudiant, puis de prendre
                                    un autre rendez-vous sur l’application. Nous
                                    avons rajouté une option qui est de voir les
                                    historiques des anciens rendez-vous.
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-4 pl-0">
                                <p>
                                    Pour améliorer l’expérience utilisateur, nous
                                    avons décidé de lier le calendrier personnel du
                                    mentor avec celui de l’application mobile.
                                    Comme ça, il ne switche pas entre deux
                                    applications : cette application est tout-en-un.
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-4 pl-0">
                                <p>
                                    Pour les salariés, nous avons pensé une
                                    solution deskop, plus adaptée à leurs besoins,
                                    où ils pourraient avoir accès à toutes les
                                    informations de l’étudiant ainsi qu’au suivi du
                                    mentorat.
                                </p>
                                <p>
                                    <span className="highlight">Les outils utilisés : Adobe Photoshop, Adobe
                                    XD</span>
                                </p>
                            </div>
                        </div>
                        <div className="row h-100">
                            <div className="col-sm-12 col-md-3">
                                <Image alt="Daradja accueil" filename="5-Daradja - Screen Page d'accueil - FHD.png"  />
                            </div>
                            <div className="col-sm-12 col-md-3">
                                <Image alt="Daradja page étudiant" filename="6-Daradja - Screen Page étudiant - FHD.png"  />

                            </div>
                            <div className="col-sm-12 col-md-3">
                                <Image alt="Daradja page rendez-vous" filename="7-Daradja - Screen Page Rendez-vous - Commentaire à faire - FHD.png"  />

                            </div>
                            <div className="col-sm-12 col-md-3">
                                <Image alt="Daradja page rendez-vous 2" filename="8-Daradja - Screen Page rendez-vous - Commentaire rempli - FHD.png"  />
                            </div>
                        </div>
                        <div className="row h-100 ">
                            <div className="col-sm-12 col-md-12 mt-5 ">
                                <Image alt="Daradja mock up Iphone" filename="1-Daradja - Mock up Iphone face - FHD.png"  />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="daradjaRecap" className="daradja__recap">
                <Recap>
                    <div className="col-sm-12 col-md-12">
                        <div className="daradja__recap--speech ">
                            <h2>Ce que j'ai appris</h2>
                            <p>
                                Cet atelier UX m'a permis de savoir répondre à une demande d'un client.
                                Et de développer une solution en adéquation avec leurs problématique.
                            </p>
                        </div>
                    </div>
                </Recap>
            </section>
            <OtherProject/>
        </main>
    </Layout>
);

export default DaradjaPage