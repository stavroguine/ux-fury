import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/projects/peneloppe.scss';
import Tag from "../../components/tag";
import Recap from "../../components/recap";
import Image from "../../components/image";
import OtherProject from "../../components/otherProject";
import Context from "../../components/context";
import LeafCascade from "../../components/leafCascade";
import blue from "../../images/Leaf blue shadow.png";

const peneloppePage = () => (
    <Layout>
        <SEO title="Peneloppe" />
        <main className="peneloppe">
            <section id="peneloppeSplash" className="peneloppe__splash">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-sm-12 col-md-12 my-auto ">
                            <div className="peneloppe__splash--content align-middle">
                                <div className="peneloppe__splash--title ">
                                    <h1>La fabuleuse balade de Pénéloppe</h1>
                                </div>
                                <Tag>Tablette</Tag>
                                <Tag>6 mois</Tag>
                                <Tag>Grand public</Tag>
                                <Tag>UX/UI Designer</Tag>
                                <Tag>Scénariste</Tag>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="peneloppeIntro" className="peneloppe__intro">
                <Context
                    presentation="Le Théâtre des Champs-Elysées, grande salle de concerts parisienne,
                            et classé monument historique, veut apporter un souffle nouveau dans son histoire.
                            Ils décident de faire un partenariat avec deux écoles:
                            une spécialisée dans le design et une autre spécialisée dans le management de projet culturel."
                    problem="Le Théâtre des Champs-Elysées perd en nouveauté et en innovation. Cela se ressent dans leur public, qui peine à se renouveller : une programmation qui ne        parle qu’aux plus expérimentés, un côté inaccessible auprès des jeunes générations."
                    resolution="Nous avons proposé une balade intéractive au sein du Théâtre : pour découvrir l’histoire du lieu, introduire le nouveau public à la musique classique.        Notre concept est d’allier les nouvelles technologies au monde du classique, pour dépoussiérer l’image de cet art, qui est loin d’être “classique”."
                />
            </section>
            <section id="peneloppeSteps" className="peneloppe__steps">
                <LeafCascade/>
                <div className="container">
                    <div className="row h-100">
                        <div className="col-sm-12  pl-0">
                            <div className="peneloppe__steps--title">
                                <h2>Les étapes du projet</h2>
                            </div>
                        </div>
                    </div>
                    <div className="peneloppe__steps--item">
                        <div className="row h-100">
                            <div className="col-sm-12 pl-0">
                                <h3>La phase de recherche</h3>
                            </div>
                        </div>
                        <div className="row h-100">
                            <div className="col-sm-12 col-md-6 pl-0 my-auto">
                                <p>
                                    Nous voulions toucher les jeunes, puisque ce sont eux qui vont permettre de renouveller le public. Nous avons mené une enquête quantitative  : avaient-ils déjà été voir un concert de classique? Quelles salles de concert connaissaient-ils? Quels étaient leurs avis sur ces salles de concert? Comment voyaient-ils la musique classique en général?
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-6 pl-5">
                                <Image alt="Peneloppe - La tour Eiffel illumine le TCE" filename="2-Peneloppe - La tour Eiffel illumine le TCE - FHD.png"  />
                            </div>
                        </div>
                    </div>
                    <div className="peneloppe__steps--item">
                        <div className="row h-100">
                            <div className="col-sm-12 pl-0">
                                <h3>La phase d'idéation</h3>
                            </div>
                        </div>
                        <div className="row h-100">
                            <div className="col-sm-12 col-md-6 pl-0 my-auto">
                                <p>
                                    Les jeunes connaissent très peu le Théâtre des Champs-Elysées. Le Théâtre a une image d'un public plutôt fermé , pas accessible. L’histoire du Théâtre étant riche en scandales, nous avons voulu joué sur cette facette. C’est pourquoi, nous avons pensé à un parcours dans le Théâtre, qui raconte l’histoire de ce monument. A travers une tablette, le spectateur revit les évènements passés.
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-6 pl-5">
                                <Image alt="Mock up ipad" filename="3-Penelope - Mock up Ipad inside the TCE - FHD.png"  />
                            </div>
                        </div>
                    </div>
                    <div className="peneloppe__steps--item--prod pl-0">
                        <div className="row h-100 pl-0">
                            <div className="col-sm-12 pl-0">
                                <h3>La phase de production</h3>
                            </div>
                        </div>
                        <div className="row h-100 pl-0">
                            <div className="col-sm-12">
                                <h4>Wireflow : Connexion</h4>
                            </div>
                        </div>
                        <div className="row h-100 pl-0">
                            <div className="col-sm-12  wireflow__img">
                                <Image alt="Wireflow 1" filename="4- Wireflow connexion.png"  />

                            </div>
                        </div>
                        <div className="row h-100 pl-0">
                            <div className="col-sm-12">
                                <h4>Wireflow : Choix du parcours</h4>
                            </div>
                        </div>
                        <div className="row h-100 pl-0">
                            <div className="col-sm-12  wireflow__img">
                                <Image alt="Wireflow 2" filename="5- Wireflow choix du parcours.png"  />
                            </div>
                        </div>
                        <div className="row h-100 pl-0">
                            <div className="col-sm-12">
                                <h4>Wireflow : Visualiser ses items et son avancement dans le jeu</h4>
                            </div>
                        </div>
                        <div className="row h-100 pl-0">
                            <div className="col-sm-12  wireflow__img">
                                <Image alt="Wireflow 3" filename="6- Wireflow voir items.png"  />
                            </div>
                        </div>
                        <div className="row h-100 pl-0">
                            <div className="col-sm-12">
                                <h4>Wireflow : Démarrer une activité et la finir </h4>
                            </div>
                        </div>
                        <div className="row h-100 pl-0">
                            <div className="col-sm-12  wireflow__img">
                                <Image alt="Wireflow 4" filename="7- Wireflow demarrer activité .png"  />
                            </div>
                        </div>
                    </div>
                    <div className="peneloppe__steps--item">
                        <div className="row h-100">
                            <div className="col-sm-12 pl-0">
                                <h3>La phase graphique</h3>
                            </div>
                        </div>
                        <div className="row h-100">
                            <div className="col-sm-12 pl-0">
                                <p>
                                    Pour notre partie   graphique, nous nous sommes documentés sur les
                                    deux statues de Bourdelle La Force et La Liberté, que l’on retrouve dans
                                    les deux parties du théâtre. Elles nous ont inspiré deux parcours différents
                                    mais complémentaires.
                                </p>
                            </div>
                        </div>
                        <div className="row h-100">
                            <div className="col-sm-0 col-md-2 pl-0">
                            </div>
                            <div className="col-sm-12 col-md-3 pl-0">
                                <Image alt="La liberté de coté" filename="8-Peneloppe - Photo La liberté de coté - FHD.png"  />
                            </div>
                            <div className="col-sm-12 col-md-3 pl-0">
                                <Image alt="Peneloppe" filename="9-Peneloppe - Photo Peneloppe - FHD.png"  />
                            </div>
                            <div className="col-sm-12 col-md-3 pl-0">
                                <Image alt="Parcours force" filename="10-Peneloppe - Photo La force - FHD.png"  />
                            </div>
                        </div>
                        <div className="row h-100 pt-5">
                            <div className="col-sm-12 col-md-12 pl-0">
                                <Image alt="Entrée du TCE" filename="11-Peneloppe - Photo Entree du TCE - FHD.png"  />
                            </div>
                        </div>
                        <div className="row h-100 ">
                            <div className="col-sm-12 col-md-4 pl-0 mt-5">
                                <p>
                                    La première partie de l’histoire du Théâtre des Champs-Elysées, de
                                    1913 à 1945, qui est symbolisée par le parcours
                                    Liberté, a été caractérisée par leur liberté de
                                    programmation, qui était jugée provocante
                                    pour l’époque, comme avec Le Sacre de
                                    Printemps de Stravinsky.
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-4 pl-5 mt-5">
                                <div className="journey">
                                    <h4>Parcours Liberte</h4>
                                    <ul className="journey__color journey__color--liberty">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                    <div className="journey__font journey__font--liberty">
                                        <span>Valeria</span>
                                        <span>abcdefghijklmnopqrstuvwxyz</span>
                                        <span>0123456789</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row h-100 ">
                            <div className="col-sm-12 col-md-4 pl-0 mt-5">
                            </div>
                            <div className="col-sm-12 col-md-4 pl-5 mt-5" >
                                <div className="journey">
                                    <h4>Parcours Force</h4>
                                    <ul className="journey__color journey__color--strength">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                    <div className="journey__font journey__font--strength">
                                        <span>Billionaire</span>
                                        <span>abcdefghijklmnopqrstuvwxyz</span>
                                        <span>0123456789</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 pl-5 mt-5">
                                <p>
                                    Pour la deuxième partie de l’histoire du Théâtre
                                    des Champs-élysées, de 1946 à nos jours, qui
                                    est symbolisée par le parcours Force, nous
                                    avons voulu monter que le Théâtre a gagné en
                                    notoriété et qu’il s’est positionné
                                    en force dans tout Paris.
                                </p>
                            </div>
                        </div>
                        <div className="row h-100 ">
                            <div className="col-sm-12 col-md-12 mt-5 ">
                                <Image alt="Mock up Ipad Stylo" filename="12-Peneloppe - Mock up Ipad and Stylo.png"  />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="peneloppeRecap" className="peneloppe__recap">
                <Recap>
                    <div className="col-sm-12 col-md-12">
                        <div className="peneloppe__recap--speech ">
                            <h2>Au final</h2>
                            <p>
                                Cette collaboration entre mon université et le Théâtre des Champs-Elysées
                                m'a permise de voir le monde du jeux vidéo ludique. Avec mon groupe,
                                nous avons été dans une démarche de développement de jeux vidéos, qui
                                pourrait être un atout auprès des jeunes générations, en déringardisant le
                                milieu de la musique classique.
                            </p>
                        </div>
                    </div>
                    <img src={blue} className="leaf leaf__right" />
                </Recap>
            </section>
            <OtherProject/>
        </main>
    </Layout>
);

export default peneloppePage