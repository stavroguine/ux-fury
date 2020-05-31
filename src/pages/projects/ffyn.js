import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import '../../styles/projects/ffyn.scss';
import Tag from "../../components/tag";
import Recap from "../../components/recap";
import Image from "../../components/image";
import OtherProject from "../../components/otherProject";
import Context from "../../components/context";


const FfynPage = () => (
    <Layout>
        <SEO title="Ffyn" />
        <main className="ffyn">
            <section id="ffynSplash" className="ffyn__splash">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-sm-12 col-md-12 my-auto ">
                            <div className="ffyn__splash--content align-middle">
                                <div className="ffyn__splash--title ">
                                    <h1>FFYN</h1>
                                </div>
                                <Tag>Web</Tag>
                                <Tag>6 mois</Tag>
                                <Tag>Les investisseurs</Tag>
                                <Tag>Les assets managers</Tag>
                                <Tag>UX/UI Designer</Tag>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ffynIntro" className="ffyn__intro">
                <Context
                    presentation="Les asset managers, ceux qui vendent les fonds, et les investisseurs, ceux qui achètent les fonds, sont souvent en contact. Le moyen le plus simple de communiquer est le mail. Ce moyen trouve vite ses limites."
                    problem="Les informations envoyées par mail sont nombreuses : certaines sont valables, quand d’autres ne sont plus d’actualités. Cependant la messagerie est aussi utilisée quotidiennement par ces deux professions. L’information est noyée parmi la quantité de mail. Il fallait trouver un moyen de séparer les informations quotidiennes et les informations sur les fonds."
                    resolution="FFYN répond à cette problématique en lançant un outil qui va permettre de centraliser toutes les informations sur les fonds."
                />
            </section>
            <section className="ffynSteps" className="ffyn__steps">
                <div className="container">
                    <div className="row h-100">
                        <div className="col-sm-12 pl-0">
                            <div className="ffyn__steps--title">
                                <h2>Les fonctionnalités que j'ai développées</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ffyn__steps--item">
                        <div className="row h-100">
                            <div className="col-sm-12 pl-0">
                                <h3>Le digest email</h3>
                            </div>
                        </div>
                        <div className="row h-100">
                            <div className="col-sm-12 col-md-6 pl-0">
                                <h4>La découverte du problème</h4>
                                <p className="h-45">
                                    Grâce aux KPIs, nous avons remarqué que certains utilisateurs ne venaient qu’une fois par mois sur la solution. Nous avons mené une enquête pour savoir précisément pourquoi ils ne venaient qu’une fois par mois. Le problème qui est ressorti était que les utilisateurs inscrits n’étaient pas notifiés de l’activité sur FFYN. Et qu’ils accédaient à l’application que pour se mettre à la page. Nous avons donc pensé aux digest emails.
                                </p>
                                <Image alt="Ffyn Zoning" filename="1-Ffyn - zonning (6) - FHD.png" className="img-step" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h4>Notre réponse</h4>
                                <p>
                                    Les digest emails sont des emails qui notifient l’utilisateur de l’activité de son groupe sur la plateforme. Avec le lead UX, nous avons identifié le moment le plus propice pour envoyer les digest emails. Ensuite, avec l’architecte, nous avons convenu d’envoyer les digest tous les lundi matin, s’il y a eu de l’activité dans la semaine.  Nous avons ensuite fait les mock up et le design.
                                </p>
                                <p>
                                    <span className="highlight">Les outils utilisés : tri de carte, Wireframing, Sketch, design system</span>
                                </p>
                                <Image alt="Ffyn Zoning 2" filename="2-Ffyn - zonning (16) - FHD.png" className="img-step" />
                            </div>
                        </div>
                    </div>
                    <div className="ffyn__steps--item">
                        <div className="row h-100">
                            <div className="col-sm-12 pl-0">
                                <h3>Le nouveau layout des posts</h3>
                            </div>
                        </div>
                        <div className="row h-100">
                            <div className="col-sm-12 col-md-6 pl-0">
                                <h4>La découverte du problème</h4>
                                <p>
                                    La solution FFYN est pensée comme un réseau social. Les utilisateurs font des posts pour parler à leurs clients. Mais peu d’utilisateurs utilisent les réseaux sociaux. Pour la majorité de nos utilisateurs, la lecture de FFYN n’était pas aisée : ils se perdaient, ne savaient pas le sujet du post, ni son auteur. C’est comme cela que nous avons pensé à une refonte des posts.
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h4>Notre réponse</h4>
                                <p>
                                    Pour redesigner nos posts, nous devions repenser FFYN plus  comme un outil de travail communautaire qu’un “réseau social”. Nous avons priorisé les informations : de la plus importante à la moins importante. Pour mettre en avant le sujet du post, nous avons inséré le champs titre, en gros, puis l’auteur et la date du post. Ce changement incluait aussi une nouvelle manière de poster sur FFYN.
                                </p>
                                <p>
                                    <span className="highlight">Les outils utilisés : Wireframing, Sketch, Design system</span>
                                </p>

                            </div>
                        </div>
                        <div className="row h-100">
                            <div className="col-sm-12 col-md-12 pl-0">
                                <Image alt="Ffyn Nouveau post" filename="3-Ffyn - new post design - FHD.png" className="img-step" />
                            </div>
                        </div>
                    </div>
                    <div className="ffyn__steps--item">
                        <div className="row h-100">
                            <div className="col-sm-12 pl-0">
                                <h3>Une nouvelle manière d'envoyer des messages</h3>
                            </div>
                        </div>
                        <div className="row h-100">
                            <div className="col-sm-12 col-md-6 pl-0">
                                <h4>La découverte du problème</h4>
                                <p className="h-42">
                                    FFYN fonctionnait par groupe d’utilisateurs. Les utilisateurs d’un groupe n’avaient pas les mêmes interlocuteurs dans les autres entités. Il pouvait y avoir des confusions dans les échanges, qui entraînaient des pertes de temps.
                                </p>
                                <Image alt="Ffyn Nouveau post" filename="4-FFYN - send to.png" className="img-step" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h4>Notre réponse</h4>
                                <p>
                                    Pour prévenir ces confusions, nous avons décidé de rendre l’application plus personnalisable. Les utilisateurs peuvent désormais rentrer leurs préférences de contact, dans les groupes, pour envoyer les informations, afin de ne pas polluer les autres membres du groupe, qui ne suivent pas le projet.

                                </p>
                                <p>
                                    <span className="highlight">Les outils utilisés : Wireframing, Sketch, Design system</span>
                                </p>
                                <Image alt="Ffyn Nouveau post FHD" filename="3-Ffyn - new post design - FHD.png" className="img-step" />

                            </div>
                        </div>
                    </div>
                    <div className="ffyn__steps--item">
                        <div className="row h-100">
                            <div className="col-sm-12 pl-0">
                                <h3>Transférer un message lorsque l’on reçoit un Out of Office</h3>
                            </div>
                        </div>
                        <div className="row h-100">
                            <div className="col-sm-12 col-md-6 pl-0">
                                <h4>La découverte du problème</h4>
                                <p>
                                    Durant la saison estivale, beaucoup de nos utilisateurs sont en vacances. Ils configurent un mail automatique, qui s’envoit automatiquement après réception d’un nouveau message. Sur FFYN, lorsqu’un utilisateur publiait un post, et si son destinataire était en vacances, il recevait dans la réponse de son post le mail de l’out-of-office. Pour l’utilisateur FFYN, son seul moyen de renvoyer son message à un autre destinaire était de :

                                </p>
                                <ul>
                                    <li>1) recopier le mail</li>
                                    <li>2) refaire un post</li>
                                    <li>3) sélectionner un autre contact</li>
                                    <li>4) renvoyer le message.</li>
                                    <li className="highlight">10 minutes de trop face à l’utilisation d’une boîte mail !</li>
                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h4>Notre réponse</h4>
                                <p>
                                    Nous avons décidé de rajouter une fonctionnalité, renvoyer le message à un autre destinaire, dès qu’un out of office arrivait. L’utilisateur n’avait plus qu’à cliquer et renvoyer son mail à un autre destinaire.
                                </p>
                                <p className="highlight">
                                    Les outils utilisés : Tri de carte, Wireframing (tableau), Sketch, Design System
                                </p>
                            </div>
                        </div>
                        <div className="row h-100">
                            <div className="col-sm-12 col-md-4 pl-0">
                                <Image alt="Ffyn Zoning vertical 1" filename="6-Ffyn - zonning (8) - FHD.png" />
                            </div>
                            <div className="col-sm-12 col-md-4 pl-0">
                                <Image alt="Ffyn Zoning vertical 2" filename="7-Ffyn - zonning (9) - FHD.png" />
                            </div>
                            <div className="col-sm-12 col-md-4 pl-0">
                                <Image alt="Ffyn Zoning vertical 3" filename="8-Ffyn - zonning (10) - FHD.png"  />
                            </div>
                        </div>
                        <div className="row h-100 pt-3">
                            <div className="col-sm-0 col-md-2 pl-0">
                            </div>
                            <div className="col-sm-12 col-md-4 pl-0">
                                <Image alt="Ffyn Zoning vertical 4" filename="9-Ffyn - zonning (11) - FHD.png"  />
                            </div>
                            <div className="col-sm-12 col-md-4 pl-0">
                                <Image alt="Ffyn Zoning vertical 4" filename="10-Ffyn - zonning (12) - FHD.png"  />
                            </div>
                        </div>
                        <div className="row h-100 pt-5">
                            <div className="col-sm-12 col-md-12 pl-0">
                                <Image alt="Ffyn Zoning vertical 4" filename="11-Ffyn - laptop hand  - FHD.png"  />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ffynRecap" className="ffyn__recap">
                <Recap>
                    <div className="col-sm-12 col-md-12">
                        <div className="ffyn__recap--speech ">
                            <h2>Ce que j'ai appris</h2>
                            <p>
                                Ce stage m'a permis de familiariser avec la méthodologie SCRUM et la méthodologie UX, et de mieux appréhender le côté produit. Aussi, j'ai pu créer de nouvelles
                                expériences utilisateurs.
                            </p>
                        </div>
                    </div>
                </Recap>
            </section>
            <OtherProject/>
        </main>
    </Layout>
);

export default FfynPage